import { Component, Input } from '@angular/core';

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
}
