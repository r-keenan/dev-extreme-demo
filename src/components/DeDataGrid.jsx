import React from "react";

import DataGrid, { Scrolling, Pager, Paging } from "devextreme-react/data-grid";
import SelectBox from "devextreme-react/select-box";
import CheckBox from "devextreme-react/check-box";
import { generateData } from "./data/data.js";
import styled from "styled-components";

const displayModes = [
  { text: "Display Mode 'full'", value: "full" },
  { text: "Display Mode 'compact'", value: "compact" },
];
const allowedPageSizes = [5, 10, "all"];
class App extends React.Component {
  displayModeChange = (value) => {
    this.setState({ ...this.state, displayMode: value });
  };

  showPageSizeSelectorChange = (value) => {
    this.setState({ ...this.state, showPageSizeSelector: value });
  };

  showInfoChange = (value) => {
    this.setState({ ...this.state, showInfo: value });
  };

  showNavButtonsChange = (value) => {
    this.setState({ ...this.state, showNavButtons: value });
  };

  isCompactMode() {
    return this.state.displayMode === "compact";
  }

  customizeColumns(columns) {
    columns[0].width = 70;
  }

  constructor(props) {
    super(props);
    this.state = {
      displayMode: "full",
      showPageSizeSelector: true,
      showInfo: true,
      showNavButtons: true,
    };
  }

  render() {
    return (
      <div>
        <Wrapper>
          <DataGrid
            id="gridContainer"
            dataSource={generateData(3)}
            keyExpr="id"
            showBorders={true}
            customizeColumns={this.customizeColumns}
          >
            <Scrolling rowRenderingMode="virtual"></Scrolling>
            <Paging defaultPageSize={10} />
            <Pager
              visible={true}
              allowedPageSizes={allowedPageSizes}
              displayMode={this.state.displayMode}
              showPageSizeSelector={this.state.showPageSizeSelector}
              showInfo={this.state.showInfo}
              showNavigationButtons={this.state.showNavButtons}
            />
          </DataGrid>
          <div className="options">
            <div className="caption">Options</div>
            <div className="option-container">
              <div className="option">
                <SelectBox
                  id="displayModes"
                  items={displayModes}
                  displayExpr="text"
                  valueExpr="value"
                  value={this.state.displayMode}
                  onValueChange={this.displayModeChange}
                />
              </div>
              <div className="option">
                <CheckBox
                  id="showPageSizes"
                  text="Show Page Size Selector"
                  value={this.state.showPageSizeSelector}
                  onValueChange={this.showPageSizeSelectorChange}
                />
              </div>
              <div className="option">
                <CheckBox
                  id="showInfo"
                  text="Show Info Text"
                  value={this.state.showInfo}
                  onValueChange={this.showInfoChange}
                  disabled={this.isCompactMode()}
                />
              </div>
              <div className="option">
                <CheckBox
                  id="showNavButtons"
                  text="Show Navigation Buttons"
                  value={this.state.showNavButtons}
                  onValueChange={this.showNavButtonsChange}
                  disabled={this.isCompactMode()}
                />
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default App;

const Wrapper = styled.section`
  #gridContainer {
    max-height: 800px;
  }

  .options {
    margin-top: 20px;
    padding: 20px;
    background-color: rgba(191, 191, 191, 0.15);
    position: relative;
  }

  .caption {
    font-size: 18px;
    font-weight: 500;
  }

  .option-container {
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
  }

  .option {
    margin-top: 10px;
    display: flex;
    align-items: center;
  }

  .option-caption {
    white-space: nowrap;
    margin: 0 8px;
  }
`;
