import * as React from 'react';
import BaseEntryPoint from "./entrypoint/BaseEntryPoint";

export default class ShoppingEntryPoint extends BaseEntryPoint {

}

ShoppingEntryPoint.render(<ShoppingEntryPoint/>);
if (module.hot) {
    module.hot.accept('.', () => {
        const ReloadedEntryPoint = require('.').default;
        ShoppingEntryPoint.render(<ReloadedEntryPoint/>);
    });
}
