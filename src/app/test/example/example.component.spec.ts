import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { ExampleComponent } from './example.component';

describe('ExampleComponent', () => {
  let spectator: Spectator<ExampleComponent>;
  const createComponent = createComponentFactory(ExampleComponent);

  beforeEach(() => spectator = createComponent());

  it('should not show list of items on initial component state', () => {
    expect(spectator.component.show).toBeFalse();
    expect(spectator.query('.list')).not.toExist();
  });

  it('should show list after toggle button click', () => {
    spectator.click('button');
    expect(spectator.component.show).toBeTrue();
    expect(spectator.query('.list')).toExist();
  });

});
