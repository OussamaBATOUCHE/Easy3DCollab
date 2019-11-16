import * as THREE from 'three'
export class Material {
    private uuid: string;
    private name: string;
    private color: THREE.Color;
    constructor (material: THREE.MeshPhongMaterial) {
        this.uuid = material.uuid;
        this.name = material.name;
        this.color = material.emissive.clone();
    }
    getColor(): THREE.Color {
        return this.color;
    }
}
