// imports repository for mre
import * as MRE from '@microsoft/mixed-reality-extension-sdk';

// the main class for the app
export default class HappyBirthday {
    private text: MRE.Actor = null;
    private cube: MRE.Actor = null;
    private assets: MRE.AssetContainer;

    constructor(private context: MRE.Context) {
        this.context.onStarted(() => this.started());
    }


}

