
'use strict';

import { database } from '../utils.js';


class Skin {
    static id = "panelSkin";
    async init(config) {
        this.config = config
        this.database = await new database().init();
    }
}

export default Skin;