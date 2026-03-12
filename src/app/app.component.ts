import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MandoAiComponentComponent } from './mandoAI/mando-ai-component/mando-ai-component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MandoAiComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mandoAI';
}
