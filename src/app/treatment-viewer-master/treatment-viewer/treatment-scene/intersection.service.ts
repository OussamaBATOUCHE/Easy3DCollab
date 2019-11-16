import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntersectionService {
  private mesh;
  private storedMaterialColor: THREE.Color;
  constructor(mesh) {
    this.mesh = mesh;
    this.storedMaterialColor = this.mesh.material.emissive.clone();
  }

  getStored() {
    return this.mesh;
  }
  resetColor() {
    this.mesh.material.emissive.copy(this.storedMaterialColor);
  }
  setHoverColor() {
    this.mesh.material.emissive.setHex( 0xff0000 );
  }
}
