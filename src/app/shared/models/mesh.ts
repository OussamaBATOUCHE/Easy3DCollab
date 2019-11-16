import * as THREE from 'three';
import {Material} from './material.model';
export class Mesh {
    private mesh;
    private storedMaterialColor: THREE.Color;
    private unSelected = true;
    private uuid: string;
    constructor(mesh) {
        this.mesh = mesh;
        this.uuid = mesh.uuid;
        this.storedMaterialColor = this.mesh.material.emissive.clone();
    }

    getStored() {
        return this.mesh;
    }
    resetHoverColor() {
        if (this.unSelected) {
            this.mesh.material.emissive.copy(this.storedMaterialColor);
        } else {
            this.setSelectedColor();
        }
    }
    setHoverColor() {
        this.mesh.material.emissive.setHex( 0xff0000 );
    }
    setSelected() {
        this.unSelected = false;
        this.setSelectedColor();
    }
    setSelectedColor() {
        this.mesh.material.emissive.setHex( 0x980404 );
    }
    setUnselected() {
        this.unSelected = true;
        this.resetSelectedColor();
    }
    resetSelectedColor() {
        this.mesh.material.emissive.copy(this.storedMaterialColor);
    }
    getUUID() {
        return this.uuid;
    }
}
