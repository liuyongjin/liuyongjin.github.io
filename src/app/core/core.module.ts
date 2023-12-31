import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BASE_CONFIG } from '@app/constant';
@NgModule({
  declarations: [],
  imports: [],
  providers: [
    {
      provide: 'BASE_CONFIG',
      useValue: {
        // base_url: 'http://blog.com/api/v1',
        // base_img_url: 'http://blog.com'
        // base_url: 'http://api.liuyongjin.cn/api/v1',
        base_url: '/api',
        base_img_url: 'http://api.liuyongjin.cn',
      } as BASE_CONFIG,
    },
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        `CoreModule has already been loaded. Import Core modules in the AppModule only.`
      );
    }
  }
}
