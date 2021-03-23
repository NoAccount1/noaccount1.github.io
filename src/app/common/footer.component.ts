import {Component, NgModule} from '@angular/core';

@Component({
  selector: 'app-footer',
  template: '<footer class="docs-footer"><div class="docs-footer-list"><div class="docs-footer-logo"><div class="footer-logo"><img class="docs-footer-angular-logo" src="../../../assets/img/homepage/angular-white-transparent.svg" alt="Angular icon"><span><a href="https://angular.io">Learn Angular</a></span></div></div><div class="docs-footer-copyright"><div><span>Powered by Google ©2010-2020.</span><a href="https://github.com/angular/components/blob/master/LICENSE">Code licensed under an MIT-style License.</a><span>Documentation licensed under CC BY 4.0.</span></div></div></div></footer>',
  styles: [`
  .docs-footer {
    padding: 12px;
    font-size: 12px;
  }
  .docs-footer-list {
    align-items: center;
    display: flex;
    flex-flow: row wrap;
    padding: 8px;
  }
  .docs-footer-logo {
    flex: 1;
  }
  .docs-footer-angular-logo {
    height: 50px;
  }
  .docs-footer-copyright {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    flex-direction: column;
    min-width: 225px;
    margin-top: 16px;
    > div {
      display: flex;
      flex-direction: column;
      align-self: flex-end;
      text-align: center;
    }
    @media (min-width: 885px) {
      margin-top: 0;
    }
  }
  .docs-footer-logo span {
    display: inline-block;
    line-height: 50px;
    margin: 0 40px;
    vertical-align: bottom;
    a {
      font-size: 16px;
      padding: 0;
    }
  }
  a {
    text-decoration: none;
    color: inherit;
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
  @media screen and (max-width: 884px){
    .docs-footer-list {
      flex-direction: column;
    }
  }
  `]
})
export class FooterComponent {}


@NgModule({
  imports: [],
  exports: [FooterComponent],
  declarations: [FooterComponent],
})
export class FooterModule {}
