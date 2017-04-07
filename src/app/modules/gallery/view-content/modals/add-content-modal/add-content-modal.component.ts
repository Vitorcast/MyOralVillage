import { Component, Input, Output, EventEmitter } from '@angular/core';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ContentItemBase } from '../../../../../services'
import { AppState } from '../../../../../app.service'

@Component({
    selector: 'add-content-modal',
    templateUrl: './add-content-modal.component.html',
    styleUrls: ['./add-content-modal.component.css']
})
export class AddContentModal {
    @Input() countries;
    @Input() themes;
    @Input() categories;
    @Input() tags;
    @Input() onContentItemAdd;
    fileList: FileList;


    constructor(public activeModal: NgbActiveModal, private appState: AppState) { }


    addContentItem(event) {

        console.log(event, "event")

        let data = {
            title: event.target.name.value,
            source: "../../assets/img/image4.png".replace(/\//g, "\\/"),
            description: event.target.description.value,
            postedBy: "testUser",
            dateAdded: new Date().toLocaleDateString(),
            theme: event.target.theme.value,
            category: event.target.category.value,
            country: event.target.country.value,
            tag: event.target.tag.value
        }

        //this.onContentItemAdd.emit({ contentItemData: data, files: this.fileList });
        this.onContentItemAdd(data);
        this.activeModal.close();
    }
}