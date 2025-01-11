import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-default-form-layout',
    imports: [],
    templateUrl: './default-form-layout.component.html',
    styleUrl: './default-form-layout.component.scss',
})
export class DefaultFormLayoutComponent {
    @Input() title: string = '';
    @Input() primaryBtnText: string = '';
    @Input() secondaryBtnText: string = '';
    @Input() disablePrimaryBtn: boolean = true;
    @Output('submit') onSubmit = new EventEmitter();
    @Output('navigate') onNavigate = new EventEmitter();

    submit() {
        this.onSubmit.emit();
    }

    navigate() {
        this.onNavigate.emit();
    }
}
