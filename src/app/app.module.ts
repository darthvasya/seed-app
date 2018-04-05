import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AuthGuard } from './shared/guards/auth.guard';

import { AppComponent } from './app.component';

import { LoaderService } from './shared/core/loader.service';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule],
    providers: [AuthGuard, LoaderService],
    bootstrap: [AppComponent]
})
export class AppModule {}
