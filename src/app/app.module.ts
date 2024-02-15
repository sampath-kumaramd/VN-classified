import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';

import { HeaderComponent } from './components/shared/components/header/header.component';
import { FooterComponent } from './components/shared/components/footer/footer.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { HomePageCardComponent } from './components/pages/home-page/home-page-card/home-page-card.component';
import { LoginComponent } from './components/pages/login/login.component';
import { PostAdComponent } from './components/pages/post-ad/post-ad.component';
import { PostAdSuccessComponent } from './components/pages/post-ad-success/post-ad-success.component';
import { SearchBarComponent } from './components/shared/components/search-bar/search-bar.component';
import { CategoryPageComponent } from './components/pages/category-page/category-page.component';
import { ContentCardComponent } from './components/pages/category-page/content-card/content-card.component';
import { AdPageComponent } from './components/pages/ad-page/ad-page.component';
import { KebabCasePipe } from './components/shared/pipe/kebab-case.pipe';
import { EditUserComponent } from './components/pages/edit-user/edit-user.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FilterDialogComponent } from './components/pages/ad-page/filter-dialog/filter-dialog.component';
import { FilterDialogCategoryComponent } from './components/pages/category-page/filter-dialog-category/filter-dialog-category.component';

@NgModule({
  declarations: [
    KebabCasePipe,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    HomePageCardComponent,
    LoginComponent,
    PostAdComponent,
    PostAdSuccessComponent,
    SearchBarComponent,
    CategoryPageComponent,
    ContentCardComponent,
    AdPageComponent,
    EditUserComponent,
    PageNotFoundComponent,
    FilterDialogComponent,
    FilterDialogCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,

    // angualr material
    MatSlideToggleModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatDividerModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
