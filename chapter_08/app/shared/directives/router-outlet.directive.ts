import {
  Directive,
  ViewContainerRef,
  DynamicComponentLoader,
  Attribute,
  Input } from '@angular/core';
import {
  Router,
  RouterOutlet,
  ComponentInstruction } from '@angular/router-deprecated';
import { AuthenticationService } from '../shared';

@Directive({
  selector: 'pomodoro-router-outlet'
})
export default class RouterOutletDirective extends RouterOutlet {
  parentRouter: Router;
  @Input() protectedPath: string;
  @Input() loginUrl: string;

  constructor(
    _viewContainerRef: ViewContainerRef,
    _loader: DynamicComponentLoader,
    _parentRouter: Router,
    @Attribute('name') nameAttr: string) {

    super(_viewContainerRef, _loader, _parentRouter, nameAttr);
    this.parentRouter = _parentRouter;
  }

  activate(nextInstruction: ComponentInstruction): Promise<any> {
    let requiresAuthentication = this.protectedPath === nextInstruction.urlPath;

    if (requiresAuthentication &&
        !AuthenticationService.isAuthorized()) {
      this.parentRouter.navigateByUrl(this.loginUrl);
    }

    return super.activate(nextInstruction);
  }
}
