import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;

  beforeEach(() => {
      component = new VoteComponent();
  });

  it('should increment totalVotes when upvotes', () => {
    component.upVote();

    expect(component.totalVotes).toBe(1);
  });

  it('should drecrement totalVotes when downvotes', () => {
    component.downVote();

    expect(component.totalVotes).toBe(-1);
  });


});
