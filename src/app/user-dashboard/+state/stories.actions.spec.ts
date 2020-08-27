import * as fromStories from './stories.actions';

describe('loadStoriess', () => {
  it('should return an action', () => {
    expect(fromStories.loadStories().type).toBe('[Stories] Load Storiess');
  });
});
