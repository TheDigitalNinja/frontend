import { Component } from '@angular/core';
import { AuthService } from './_services/auth/auth.service';
import { FooterComponent } from './_components/footer/footer.component';
import { SidebarListsComponent } from './_components/sidebar-lists/sidebar-lists.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GroceryList.io';
  constructor(private authService: AuthService) { }
}
