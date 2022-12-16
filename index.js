import { createRoot } from 'react-dom/client';
import './index.css';
import * as React from 'react';
import {
  BreadcrumbComponent,
  BreadcrumbItemDirective,
  BreadcrumbItemsDirective,
} from '@syncfusion/ej2-react-navigations';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { getComponent } from '@syncfusion/ej2-base';
import { SampleBase } from './sample-base';

const items = [{ text: 'Continente' }, { text: 'Pais' }, { text: 'Capital' }];

export class Default extends SampleBase {
  btnClick() {
    let breadcrumb,
      breadcrumbInst,
      breadcrumbs = document
        .querySelector('.content-wrapper')
        .getElementsByClassName('e-breadcrumb');
    for (let i = 0; i < breadcrumbs.length; i++) {
      breadcrumb = breadcrumbs[i];
      breadcrumbInst = getComponent(breadcrumb, 'breadcrumb');
      breadcrumbInst.activeItem =
        breadcrumbInst.items[breadcrumbInst.items.length - 1].text;
    }
  }
  breadcrumbTemplate() {
    return <span className="e-bicons e-arrow"></span>;
  }

  render() {
    return (
      <div className="control-pane">
        <div className="control-section">
          <div className="content-wrapper breadcrumb-control-wrapper">
            <div className="row material2">
              <div className="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                <h5 style={{ display: 'inline-block' }}>Simple Breadcrumb</h5>
                <ButtonComponent
                  cssClass="e-small reset-btn"
                  onClick={this.btnClick.bind(this)}
                >
                  Reset State
                </ButtonComponent>
              </div>
            </div>
            <div className="row material2">
              <div className="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                <BreadcrumbComponent
                  enableNavigation={false}
                  items={items}
                ></BreadcrumbComponent>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const root = createRoot(document.getElementById('sample'));
root.render(<Default />);
