import { transformObj } from './index';

describe('引用在线css', () => {
  it('基本', () => {
    expect(
      transformObj(`
@import "./../../remax-styles.wxss";
.test {
  width: 26.66667vw;
  height: 26.66667vw;
  background-color: #f00;
  font-size: 8vw;
}

:root:root {
  --adm-color-primary: #2780d9;
}
.part___3XIhq {
  color: #333333;
  font-size: 4vw;
  font-weight: bold;
  line-height: 4vw;
}
.block___1vZo7 {
  width: 1.2vw;
  height: 3.73333vw;
  background: #2780d9;
}
.title___3PwhH {
  margin-left: 1.6vw;
}
.today___39KY3 {
  font-size: 4vw;
  font-weight: bold;
  color: #666666;
}
.mark___3ulmI {
  font-size: 4vw;
  font-weight: bold;
  color: #d95e38;
  position: relative;
  top: -1.06667vw;
}
.elderly___1VOqu .title___3PwhH {
  font-size: 5.6vw;
  line-height: 1;
}
.elderly___1VOqu .block___1vZo7 {
  width: 1.2vw;
  height: 5.06667vw;
}

:root:root {
  --adm-color-primary: #2780d9;
}
.button___2hlxT {
  max-height: 13.06667vw;
  min-height: 13.06667vw;
  background: #2780d9;
  border: 1px solid #2780d9;
  border-radius: 2.66667vw;
  box-sizing: border-box;
  display: inline-flex;
  font-size: 4.8vw;
  color: #ffffff;
  justify-content: center;
  align-items: center;
  line-height: 4.8vw;
  padding: 0 1.46667vw;
  user-select: none;
  cursor: pointer;
}
.button___2hlxT:active {
  opacity: 0.7;
}
.bold___EUTWX {
  font-weight: bold;
}
.block___1_rpw {
  display: flex;
  width: 100%;
  flex: 1;
}
.attract___2tRfz {
  background: #ff9d46;
  border: 1px solid #ff9d46;
}
.ghost___3_82c {
  background-color: transparent;
  color: #2780d9;
}
.attract-ghost___7iFzL {
  color: #ff9d46;
}
.round___3_2_m {
  border-radius: 7.86667vw;
}
.loading___3nLe1 {
  pointer-events: none;
}
.disable___1ffne {
  pointer-events: none;
  background-color: #cccccc;
  border-color: #cccccc;
  color: #fff;
}
.small___qeiCp {
  max-height: 10.4vw;
  min-height: 10.4vw;
  font-size: 4vw;
  padding: 0 3.6vw;
}
.tiny___LdnO2 {
  max-height: 9.33333vw;
  min-height: 9.33333vw;
  font-size: 4.26667vw;
  padding: 0 3.6vw;
}
.action___1GQql {
  min-width: 20.26667vw;
  max-height: 9.86667vw;
  min-height: 9.86667vw;
  border-radius: 1.33333vw;
  font-size: 3.46667vw;
  width: auto;
  flex: none;
}
.default___3PkNh {
  background-color: #fff;
  border: 1px solid #e2e2e2;
  color: #999999;
}
.ghost___3_82c.default___3PkNh {
  background-color: transparent;
}
.noBorder___1U6tE {
  border: none;
  color: #2780d9;
}
.attract-noBorder___3D1-5 {
  color: #ff9d46;
}
.elderly___P2n0m.button___2hlxT {
  font-size: 5.46667vw;
}
.elderly___P2n0m.action___1GQql {
  max-height: 15.46667vw;
  background: #00b8a9;
  border-radius: 2.66667vw;
  font-size: 4.8vw;
  font-weight: bold;
  color: #ffffff;
  border-color: #00b8a9;
}
.group___3h_LF .button___2hlxT {
  width: auto;
  flex: initial;
}
.group___3h_LF .button___2hlxT:not(:first-child):not(:last-child) {
  border-radius: 0;
}
.group___3h_LF .button___2hlxT:first-child:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.group___3h_LF .button___2hlxT:last-child:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.wrap___1LAMi {
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon___1oAmJ {
  width: 100%;
  height: 100%;
}

@keyframes loading-rotate___3Mvyn {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.rotate___3JMmy {
  animation: loading-rotate___3Mvyn 1s linear infinite;
}

.item___1K29F {
  display: flex;
  align-items: center;
  white-space: nowrap;
  position: relative;
  color: #333;
  font-size: 4vw;
  border-bottom-color: transparent;
}
.item___1K29F.vertical___24MTW {
  flex-direction: column;
  align-items: flex-start;
}
.item___1K29F.vertical___24MTW .children___9PFPR {
  width: 100%;
}
.item___1K29F.vertical___24MTW.cell___guhZB {
  padding: 4vw 0;
}
.item___1K29F.vertical___24MTW.cell___guhZB .children___9PFPR {
  margin-top: 1.33333vw;
  border-top: 1px solid #eee;
  padding-top: 2.66667vw;
}
.item___1K29F.vertical___24MTW.card___2iaXg {
  margin: 2.66667vw 0 0;
}
.item___1K29F.vertical___24MTW.card___2iaXg .labelWrap___yZRzX {
  margin-bottom: 1.33333vw;
}
.children___9PFPR {
  color: #666;
  flex: 1;
}
.children___9PFPR picker {
  width: 100%;
}
.children___9PFPR .picker-children {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 9.33333vw;
  align-items: center;
  white-space: break-spaces;
}
.colon___BgNb5 {
  padding: 0 1.33333vw;
  display: inline-block;
  position: relative;
  top: -0.26667vw;
}
.cell___guhZB {
  min-height: 11.73333vw;
  width: 100%;
  justify-content: space-between;
  border: 0 solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;
}
.cell___guhZB:last-child {
  border-bottom: none !important;
}
.cell-children___3pxXh {
  display: flex;
  justify-content: space-between;
  text-align: right;
}
.cell-children___3pxXh textarea,
.cell-children___3pxXh input {
  text-align: right;
  flex: 1;
  padding: 0;
}
.cell-children___3pxXh textarea {
  padding: 2.66667vw 0;
  box-sizing: border-box;
}
.cell-children-left___tPyPv {
  justify-content: flex-start;
}
.cell-children-left___tPyPv input,
.cell-children-left___tPyPv .placeholder {
  text-align: left;
}
.labelWrap___yZRzX {
  display: flex;
  align-items: center;
}
.label___h8Z6Q {
  display: inline-flex;
}
.after___1wn5J {
  margin-left: 1.33333vw;
  display: inline-flex;
}
.mark___3TiN3 {
  color: #ea5328;
  display: inline-block;
  position: absolute;
  left: -0.5em;
}
.error___1UZ47 {
  color: #ed4e56;
}
.error___1UZ47 .label___h8Z6Q {
  color: #ed4e56;
}
.error___1UZ47 .children___9PFPR {
  color: #ed4e56;
}
.error___1UZ47 input,
.error___1UZ47 textarea {
  color: #ed4e56;
}
.error___1UZ47 input::placeholder,
.error___1UZ47 textarea::placeholder {
  color: #ed4e56;
}
.error___1UZ47 .placeholder {
  color: #ed4e56 !important;
}
.elderly___dM5G7.item___1K29F {
  font-size: 5.33333vw;
}
.elderly___dM5G7.cell___guhZB {
  min-height: 15.73333vw;
}
.elderly___dM5G7 .label___h8Z6Q {
  color: #666666;
  margin-right: 0 !important;
}
.elderly___dM5G7 .children___9PFPR {
  color: #333333;
  font-weight: bold;
}
.elderly___dM5G7.error___1UZ47 .label___h8Z6Q,
.elderly___dM5G7.error___1UZ47 .children___9PFPR {
  color: #ed4e56;
}
.elderly___dM5G7.error___1UZ47 .label___h8Z6Q .label___h8Z6Q,
.elderly___dM5G7.error___1UZ47 .children___9PFPR .label___h8Z6Q {
  color: #ed4e56;
}
.elderly___dM5G7.error___1UZ47 .label___h8Z6Q .children___9PFPR,
.elderly___dM5G7.error___1UZ47 .children___9PFPR .children___9PFPR {
  color: #ed4e56;
}
.elderly___dM5G7.error___1UZ47 .label___h8Z6Q input,
.elderly___dM5G7.error___1UZ47 .children___9PFPR input,
.elderly___dM5G7.error___1UZ47 .label___h8Z6Q textarea,
.elderly___dM5G7.error___1UZ47 .children___9PFPR textarea {
  color: #ed4e56;
}
.elderly___dM5G7.error___1UZ47 .label___h8Z6Q input::placeholder,
.elderly___dM5G7.error___1UZ47 .children___9PFPR input::placeholder,
.elderly___dM5G7.error___1UZ47 .label___h8Z6Q textarea::placeholder,
.elderly___dM5G7.error___1UZ47 .children___9PFPR textarea::placeholder {
  color: #ed4e56;
}
.elderly___dM5G7.error___1UZ47 .label___h8Z6Q .placeholder,
.elderly___dM5G7.error___1UZ47 .children___9PFPR .placeholder {
  color: #ed4e56 !important;
}
.elderly___dM5G7 .colon___BgNb5 {
  padding: 0;
  padding-right: 4.26667vw;
}

.input___2-d75 {
  border: none;
  background-color: transparent;
  color: inherit;
  font-size: 1em;
  width: 100%;
  white-space: break-spaces;
}
.web___2yh-S:focus {
  outline: none;
}

.sheet___9Wewv {
  width: 100vw;
  height: 100vh;
  z-index: -1;
  opacity: 0;
  background-color: transparent;
  position: fixed;
  left: 0;
  top: 0;
  transition: all 0.3s, z-index 0s 0.3s;
  overflow: hidden;
  pointer-events: none;
}
.content___1LwVz {
  transition: all 0.3s;
  will-change: transform;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
}
.bottom___1uzPM {
  transform: translateY(200vh);
}
.top___ZIZJR {
  transform: translateY(-200vh);
}
.left___1bRpu {
  transform: translateX(-200vh);
}
.right___2WAfb {
  transform: translateX(200vh);
}
.show___1laF7 {
  pointer-events: auto;
  z-index: 101;
  opacity: 1;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.3s;
}
.showContent___1rV2t {
  transform: translateY(0) translateX(0);
}

    `),
    ).toMatchSnapshot();
  });
});
