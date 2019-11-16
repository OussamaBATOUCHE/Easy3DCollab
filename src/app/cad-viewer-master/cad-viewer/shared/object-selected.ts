import {CadSceneToControllerTranslationInterface} from './cadSceneToControllerTranslation.interface';
import { Mesh} from '../../../shared/models/mesh';

export class ObjectSelected implements CadSceneToControllerTranslationInterface {
    mesh: Mesh;
    constructor (mesh: Mesh ) {
        this.mesh = mesh;
    }
    toControllerLanguage() {
    }
}
