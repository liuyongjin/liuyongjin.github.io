import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [IndexComponent],
  imports: [CommonModule, SharedModule, IndexRoutingModule],
})
export class IndexModule {}
