import { transformObj } from './index';

describe('引用在线css', () => {
  it('基本', () => {
    expect(
      transformObj(`
@import "./../../remax-styles.css";
.test {
  width: 26.66667vw;
  height: 26.66667vw;
  background-color: #f00;
  font-size: 8vw;
}

:root:root {
  --adm-color-primary: #2780d9;
}
.button___xxxxxx,
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
    `),
    ).toMatchSnapshot();
  });
});
