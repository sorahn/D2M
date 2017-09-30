import PropTypes from "prop-types";
import React from "react";

import InventorySection from "../primatives/InventorySection";
import InventoryTitle from "../primatives/InventoryTitle";
import ItemLarge from "../primatives/ItemLarge";
import ItemSmall from "../primatives/ItemSmall";
import UnequippedGrid from "../primatives/UnequippedGrid";

class InventoryRow extends React.PureComponent {
  render() {
    return (
      <div>
        <InventoryTitle>{this.props.title}</InventoryTitle>
        <InventorySection>
          <ItemLarge
            level="blue"
            tile="https://www.bungie.net/common/destiny2_content/icons/035916369a796009065dd2aee233d981.jpg"
          />
          <UnequippedGrid>
            {this.props.items.map(item => (
              <ItemSmall key={item.tile} level={item.level} tile={item.tile} />
            ))}
          </UnequippedGrid>
        </InventorySection>
      </div>
    );
  }

  static propTypes = {
    children: PropTypes.node,
  };
}

export default InventoryRow;
