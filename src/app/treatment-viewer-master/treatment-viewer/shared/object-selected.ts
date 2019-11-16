import {TreatmentSceneToControllerTranslationInterface} from './treatmentSceneToControllerTranslationInterface';
import { Mesh} from '../../../shared/models/mesh';

export class ObjectSelected implements TreatmentSceneToControllerTranslationInterface {
    mesh: Mesh;
    constructor (mesh: Mesh ) {
        this.mesh = mesh;
    }
    toControllerLanguage() {
    }
}
