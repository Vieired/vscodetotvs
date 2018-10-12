import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'collapse-demo',
  templateUrl: './conteudo-card.component.html',
  styleUrls: ['./conteudo-card.component.css']
})
export class ConteudoCardComponent implements OnInit {
  @Input() lstProdutos;
  isCollapsed = false;
  @Input() itemProd;
  modalRef: BsModalRef;

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    // this.modalRef.content.closeBtnName = 'Close';
  }
  
  constructor(private modalService: BsModalService) {}

  ngOnInit() {
  }
}
