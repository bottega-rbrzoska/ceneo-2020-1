import { async, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { TestFormComponent } from "./test-form.component";

describe('TestFormComponent', () => {

  describe('isolated tests', () => {

    let component: TestFormComponent;

    beforeEach(() => component = new TestFormComponent());

    it('should have initial form state', () => {
      expect(component.myReactiveForm.value).toEqual({ test1: null});
      expect(component.myReactiveForm.getRawValue()).toEqual({ test1: null, test2: null});
    });
    it('should be valid with given values', () => {
      component.ngOnInit();
      component.myReactiveForm.setValue({ test1: '111', test2: '333'});

      expect(component.myReactiveForm.value).toEqual({ test1: '111', test2: '333'});
      expect(component.myReactiveForm.valid).toBeTrue();
    });

  });

  describe('shallow tests', () => {

  });


})
