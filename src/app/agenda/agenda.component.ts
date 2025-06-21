import { Component, ChangeDetectionStrategy, effect, signal, computed } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css',
  providers: [provideNativeDateAdapter()],
  imports: [CommonModule, MatCardModule, MatDatepickerModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgendaComponent {
  selected = signal<Date | null>(null);

  // Mapa de lembretes por data
  private remindersMap = signal<Record<string, string[]>>({});

  // Computado: lembretes do dia selecionado
  remindersBySelectedDate = computed(() => {
    const date = this.selected();
    if (!date) return [];
    const key = this.formatDate(date);
    return this.remindersMap()[key] || [];
  });

  // Adiciona um lembrete
  addReminder() {
    const date = this.selected();
    if (!date) return;

    const key = this.formatDate(date);
    const current = { ...this.remindersMap() };

    const reminderText = prompt("Digite o lembrete:");
    if (reminderText?.trim()) {
      if (!current[key]) current[key] = [];
      current[key].push(reminderText.trim());
      this.remindersMap.set(current);
    }
  }

  // Formata data como yyyy-MM-dd
  private formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  editReminder(index: number) {
    const date = this.selected();
    if (!date) return;

    const key = this.formatDate(date);
    const current = { ...this.remindersMap() };
    const reminders = [...(current[key] || [])];

    const currentText = reminders[index];
    const newText = prompt("Editar lembrete:", currentText);

    if (newText !== null && newText.trim()) {
      reminders[index] = newText.trim();
      current[key] = reminders;
      this.remindersMap.set(current);
    }
  }

  deleteReminder(index: number) {
    const date = this.selected();
    if (!date) return;

    const key = this.formatDate(date);
    const current = { ...this.remindersMap() };
    const reminders = [...(current[key] || [])];

    const confirmDelete = confirm(`Deseja excluir o lembrete: "${reminders[index]}"?`);
    if (confirmDelete) {
      reminders.splice(index, 1);
      if (reminders.length === 0) {
        delete current[key]; // Remove a chave se não houver mais lembretes
      } else {
        current[key] = reminders;
      }
      this.remindersMap.set(current);
    }
  }
}