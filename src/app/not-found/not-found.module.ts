import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NotFoundRoutingModule } from './not-found-routing.module';

import { NotFoundComponent } from './not-found.component';


@NgModule({
    imports: [NotFoundRoutingModule, RouterModule],
    declarations: [NotFoundComponent]
})
export class NotFoundModule {}
