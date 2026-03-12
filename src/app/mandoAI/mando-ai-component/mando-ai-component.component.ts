import { Component, OnDestroy } from '@angular/core';
import { ResponseItem } from '../model/responseItem';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { TalkToMandoService } from '../service/talkToMando.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-mando-ai-component',
  imports: [
    CommonModule,
    FormsModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
  ],
  templateUrl: './mando-ai-component.component.html',
  styleUrl: './mando-ai-component.component.scss',
})
export class MandoAiComponentComponent implements OnDestroy {
  prompt: string = '';
  response: string = '';
  successMessage: string = '';
  error: string = '';
  history: ResponseItem[] = [];
  expandedHistory: string | null = null;
  isLoading: boolean = false;

  private destroy$ = new Subject<void>();
  private currentRequest?: Subscription;

  constructor(private _talkToMandoAI: TalkToMandoService) {}

  handleSubmit(): void {
    this.isLoading = true;
    this.currentRequest = this._talkToMandoAI
      .talkToMando(this.prompt)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (res: ResponseItem) => {
          this.isLoading = false;
          this.response = res.response;
          this.history.unshift(res);
        },
        error: (err) => {
          this.isLoading = false;
          this.error = err.error.detail || 'An error occurred while processing your request.';
          this.successMessage = '';
        },
      });
  }

  handleClear(): void {
    this.prompt = '';
    this.response = '';
    this.error = '';
  }

  handleStop(): void {
    if (this.currentRequest) {
      this.currentRequest.unsubscribe();
    }
    this.error = 'Request stopped by user.';
    this.isLoading = false;
  }

  handleClearHistory(): void {
    this.history = [];
  }

  isHistoryOpen(item: ResponseItem): boolean {
    return this.expandedHistory === item.id;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
