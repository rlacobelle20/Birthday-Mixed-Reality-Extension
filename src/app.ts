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

    // initialize the app
    private async started() {
		// set up somewhere to store loaded assets (meshes, textures, animations, gltfs, etc.)
		this.assets = new MRE.AssetContainer(this.context);

		// Create a new actor with no mesh, but some text.
		this.text = MRE.Actor.Create(this.context, {
			actor: {
				name: 'Text',
				transform: {
					app: { position: { x: 0, y: 0.5, z: 0 } }
				},
				text: {
					contents: "Happy Birthday!",
					anchor: MRE.TextAnchorLocation.MiddleCenter,
					color: { r: 30 / 255, g: 206 / 255, b: 213 / 255 },
					height: 0.3
				}
			}
		});

		// get cupcake to spin/rotate
		const spinCupcake = this.assets.createAnimationData(
			// The name is a unique identifier for this data. You can use it to find the data in the asset container,
			// but it's merely descriptive in this sample.
			"Spin",
			{
				// Animation data is defined by a list of animation "tracks": a particular property you want to change,
				// and the values you want to change it to.
				tracks: [{
					// This animation targets the rotation of an actor named "text"
					target: MRE.ActorPath("text").transform.local.rotation,
					// And the rotation will be set to spin over 20 seconds
					keyframes: this.generateSpinKeyframes(20, MRE.Vector3.Up()),
					// And it will move smoothly from one frame to the next
					easing: MRE.AnimationEaseCurves.Linear
				}]
			});
			
		// Once the animation data i

	}

	// planning for what is needed





	// get cupcake to say happy birthday
	// get fireworks to shoot out of cupcake when touched
	// potentially get cubcake to change colors -> can pick from a directory/map/shelf
}

