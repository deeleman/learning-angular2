import { Directive, ElementRef, DynamicComponentLoader, Attribute, Input } from 'angular2/core';
import { Router, RouterOutlet, ComponentInstruction } from 'angular2/router';
import { AuthenticationService } from '../shared';

@Directive({
  selector: 'pomodoro-router-outlet'
})
export default class RouterOutletDirective extends RouterOutlet {
  parentRouter: Router;
  @Input() protectedPath: string;
  @Input() loginUrl: string;

  constructor(
    _elementRef: ElementRef,
    _loader: DynamicComponentLoader,
    _parentRouter: Router,
    @Attribute('name') nameAttr: string) {

    super(_elementRef, _loader, _parentRouter, nameAttr);
    this.parentRouter = _parentRouter;
  }

  activate(nextInstruction: ComponentInstruction): Promise<any> {
    let requiresAuthentication = this.protectedPath === nextInstruction.urlPath;

    if (requiresAuthentication && !AuthenticationService.grantAccess()) {
      this.parentRouter.navigateByUrl(this.loginUrl);
    }

    return super.activate(nextInstruction);
  }
}
