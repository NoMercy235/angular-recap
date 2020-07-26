import { Arrow } from "./arrow.component";

describe('ArrowComponent', () => {
  it('should not call (click) when disabled', () => {
    const cmp = new Arrow();
    cmp.disabled = true;
    spyOn(cmp.click, 'emit');

    cmp.onClick(new MouseEvent('click'));

    expect(cmp.click.emit).not.toHaveBeenCalled();
  });
});
