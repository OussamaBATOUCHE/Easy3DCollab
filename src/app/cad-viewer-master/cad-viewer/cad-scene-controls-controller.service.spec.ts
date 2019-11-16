import { TestBed } from '@angular/core/testing';

import { CadSceneControlsControllerService } from './cad-scene-controls-controller.service';

describe('CadCommunicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CadSceneControlsControllerService = TestBed.get(CadSceneControlsControllerService);
    expect(service).toBeTruthy();
  });
});
