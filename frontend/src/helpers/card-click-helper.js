/* Inspired by https://inclusive-components.design/cards/ */

const isLeftButtonClick = event => event.button === 0;
const isLinkClick = event => event.target.tagName === 'A';

export default class CardClickHelper {
  constructor(linkRef) {
    this.linkRef = linkRef;
    this.clickThreshhold = 200;
  }

  onMouseUp(e) {
    if (!isLeftButtonClick(e) || isLinkClick(e)) {
      return;
    }
    this.up = +new Date();
    if (this.up - this.down < this.clickThreshhold) {
      this.linkRef.current.click();
    }
  }

  onMouseDown(e) {
    if (!isLeftButtonClick) {
      return;
    }
    this.down = +new Date();
  }
}
