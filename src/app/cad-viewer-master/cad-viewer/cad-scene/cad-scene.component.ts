import {ViewChild, OnInit, AfterViewInit, ElementRef, Component, Output, EventEmitter} from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GlTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { Mouse } from './mouse.interface';
import {CadSceneControlsControllerService} from '../cad-scene-controls-controller.service';
import { Mesh} from '../../../shared/models/mesh';
import {IntersectionService} from './intersection.service';

@Component({
  selector: 'app-cad-scene',
  templateUrl: './cad-scene.component.html',
  styleUrls: ['./cad-scene.component.scss']
})
export class CadSceneComponent implements OnInit, AfterViewInit {
  @ViewChild('rendererContainer', {static: false}) rendererContainer: ElementRef;
  @ViewChild('canvasContainer', {static: false}) canvasContainer: ElementRef;
  @Output() cadScene: EventEmitter<THREE.Scene> = new EventEmitter<THREE.Scene>();
  intersectedMaterials: EventEmitter<THREE.Mesh> = new EventEmitter<THREE.Mesh>();
  renderer = new THREE.WebGLRenderer();
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  controls: OrbitControls;
  mouse: Mouse = {x: -10, y: -10};
  renderFunctions: string [] = [];
  storedMesh: Mesh;
  INTERSECTED: Mesh;
  rendererWidthScale = 0.96;
  rendererHeightScale = 0.8;
  SELECTED: Mesh;
  constructor(private cadSceneControlsControllerService: CadSceneControlsControllerService ) {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xececec);
    this.setCamera();
    this.lightScene();
    // this.setSceneStage();
    const loader = new GLTFLoader();
    loader.setPath('/assets/models/');
    // this.useDracoLoader(loader);
    this.loadGLTFModel('Rectum1.glb', loader);
    this.loadGLTFModel('Bladder.glb', loader);
    this.loadGLTFModel('Femur_L.glb', loader);
    this.loadGLTFModel('Bowel.glb', loader);
    this.loadGLTFModel('PTV_45.glb', loader);
    this.loadGLTFModel('PTV_50-4.glb', loader);
    this.loadGLTFModel('Femur_R.glb', loader);
    //this.loadGLTFModel('.glb', loader);
    console.log(this.scene);
    this.setControls();
    this.addRenderFunction('raycasterIntersector');
  }
  ngOnInit() {
  }

  setCamera() {
    this.camera = new THREE.PerspectiveCamera(75, 800 / 500, 0.1, 5000);
    this.camera.position.set(-1.8, 0.9, 2.7);
  }

  setControls() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target.set(300, 300,  300);
    this.controls.maxDistance = 1000;
    this.controls.update();
  }

  useDracoLoader(injectedLoader: GLTFLoader) {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('./assets/libs/draco/gltf/');
    dracoLoader.setDecoderConfig({type: 'JS'});
    injectedLoader.setDRACOLoader(dracoLoader);
  }

  loadGLTFModel(url: string, injectedLoader: GLTFLoader) {
    injectedLoader.load(url, (gltf) => {
      this.scene.add(gltf.scene);

    });
  }

  lightScene() {
    const spotLight = new THREE.PointLight(0xffffff, 0.8);

    const ambientLight = new THREE.AmbientLight(0x404040, 10); // soft white light
    this.scene.add(ambientLight)
    spotLight.position.set(500, 500, 500);
    spotLight.castShadow = true;
    const spotLight2 = new THREE.PointLight(0xffffff, 5);
    spotLight2.position.set(-500, -5000, -500);

    this.scene.add(spotLight);
    this.scene.add(spotLight2);
  }

  setSceneStage() {
    const boxMaterial = new THREE.MeshBasicMaterial({side: THREE.BackSide, color: 0xececec});
    const boxGeometry = new THREE.BoxBufferGeometry(50, 50, 50);
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.set(0, 0, 0);
    boxMesh.castShadow = true;
    const stageFloorMaterial = new THREE.MeshPhongMaterial({color: 0xb0acac, dithering: true});

    const stageFloorGeometry = new THREE.PlaneBufferGeometry(500, 500);

    const stageFloor = new THREE.Mesh(stageFloorGeometry, stageFloorMaterial);
    stageFloor.position.set(0, -1, 0);
    stageFloor.rotation.x = -Math.PI * 0.5;
    stageFloor.receiveShadow = true;
    this.scene.add(stageFloor);
  }

  ngAfterViewInit() {
    this.updateCanvasSize();
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);

    this.animate();
    this.rendererContainer.nativeElement.className = 'center-canvas';
    this.cadScene.emit(this.scene);
    this.intersectedMaterials.subscribe((mesh) => {
      this.INTERSECTED.resetHoverColor();
      this.INTERSECTED = new Mesh(mesh);
      this.INTERSECTED.setHoverColor();
    })
  }

  updateCanvasSize() {
    this.renderer.setSize(this.canvasContainer.nativeElement.clientWidth * this.rendererWidthScale,
        window.innerHeight * this.rendererHeightScale);
    this.camera.aspect = this.canvasContainer.nativeElement.clientWidth
        / window.innerHeight * this.rendererWidthScale / this.rendererHeightScale;
    this.camera.updateProjectionMatrix();
  }
  onResize() {
    this.updateCanvasSize()
  }
  addRenderFunction(renderFunctionName) {
      if (typeof this[renderFunctionName] === 'function') {
        this.renderFunctions.push(renderFunctionName);
      }
  }
  removeRenderFunction(renderFunctionName) {
    const renderFunctionIndex = this.renderFunctions.indexOf(renderFunctionName);
    const isRenderFunction = renderFunctionIndex >= 0;
    if (isRenderFunction) {
      this.renderFunctions.splice(renderFunctionIndex, 1);
    }
  }
  toggleRenderFunction(renderFunctionName) {
    const renderFunctionIndex = this.renderFunctions.indexOf(renderFunctionName);
    const isRenderFunction = renderFunctionIndex >= 0;
    if (isRenderFunction) {
      this.removeRenderFunction(renderFunctionName);
    } else {
      this.addRenderFunction(renderFunctionName);
    }
  }
  animate() {
    window.requestAnimationFrame(() => this.animate());
    this.renderFunctions.forEach((functionName) => {this[functionName](); });
    this.renderer.render(this.scene, this.camera);
  }

  raycasterIntersector() {
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = raycaster.intersectObjects(this.scene.children, true);
    if ( intersects.length > 0) {
      if (this.INTERSECTED == null) {
        if ((<THREE.Mesh>intersects[ 0 ].object).isMesh) {
          this.INTERSECTED = new Mesh((<THREE.Mesh>intersects[ 0 ].object));
          this.intersectedMaterials.emit(<THREE.Mesh> intersects[0].object);
        }
      } else {
      if ( this.INTERSECTED.getStored() !== intersects[ 0 ].object ) {
        if ((<THREE.Mesh>intersects[ 0 ].object).isMesh) {
          this.intersectedMaterials.emit(<THREE.Mesh> intersects[0].object);
        }
       }
      }
    } else {
      if (this.INTERSECTED != null) {
        this.INTERSECTED.resetHoverColor();
        this.INTERSECTED = null;
      }
    }

  }
  onMouseMove(event) {

    if (event.target.localName === 'canvas') {

      event.preventDefault();
      this.mouse.x = ((event.layerX - event.explicitOriginalTarget.offsetLeft) / this.canvasContainer.nativeElement.clientWidth) * 2 - 1;
      this.mouse.y = -((event.layerY) / this.canvasContainer.nativeElement.clientHeight) * 2 + 1;


    }
  }
  onSelectPart() {
    if (this.INTERSECTED != null) {
      if (this.SELECTED == null) {
        this.SELECTED = this.INTERSECTED;
        this.SELECTED.setSelected();
       } else {
        if (this.SELECTED.getUUID() !== this.INTERSECTED.getUUID()) {
          this.SELECTED.setUnselected();
          this.INTERSECTED.setSelected();
          this.SELECTED = this.INTERSECTED;
        }

      }
    }
    this.cadSceneControlsControllerService.fromScene({'verb': 'selected', 'object': this.SELECTED.mesh.name});
  }
}
