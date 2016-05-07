import { resetBaseTestProviders, setBaseTestProviders } from '@angular/core/testing';
import { BROWSER_APP_DYNAMIC_PROVIDERS } from "@angular/platform-browser-dynamic";
import {
  TEST_BROWSER_STATIC_PLATFORM_PROVIDERS,
  ADDITIONAL_TEST_BROWSER_PROVIDERS
} from '@angular/platform-browser/testing';

resetBaseTestProviders();
setBaseTestProviders(
  TEST_BROWSER_STATIC_PLATFORM_PROVIDERS,
  [
    BROWSER_APP_DYNAMIC_PROVIDERS,
    ADDITIONAL_TEST_BROWSER_PROVIDERS
  ]
);
