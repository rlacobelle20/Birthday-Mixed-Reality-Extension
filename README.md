# Birthday-Mixed-Reality-Extension
Test MRE for me to learn how to build them.

Used Mixed-Reality-Extension-SDK and Mixed-Reality-Extension-SDK-Samples for code and reference. 
Relies heavilly on the two respositories.

// @ts-ignore  can be used as a quick fix for modules not being recognized
    - instead of using this, try npm install @types/libName -> example npm install @types/node

https://stackoverflow.com/questions/64732623/react-typescript-cannot-find-module-or-its-corresponding-type-declaration

Pseudocode:

public:
    index.html -> gives "caption" to mre in html
    manifest.json -> tells user what code is made for
    cupcake.glb

scripts:
    .gitignore ->
    build-all.js ->
    change-sdk-source.js -> change-source.js
    foreach-sample.js -> for-each-run.js ->
    install-all.js -> 
    package-lock.json ->
    package.json ->
    sdk-path-config-sample.json ->

src:
    app.ts -> main code for the mre -> defines what mre does
    server.ts -> maon code for accessing/making server

.vscode:
    launch.json ->
    settings.json ->
    tasks.json ->

.gitignore ->

.editorconfig -> shows stylistically wha tall files should look like

DEVELOPER.md ->

package.json -> tells user about entire package and its details

README -> includes pseudocode and what the code actually abouts

.dockerignore ->

eslintrc.js -> 

Dockerfile ->

azure-pipelines.yml ->

package-lock.json ->

tsconfig.json ->


From command prompt:

    git clone https://github.com/rlacobelle20/Birthday-Mixed-Reality-Extension.git
    cd Birthday-Mixed-Reality-Extension
    npm install This will install all dependent packages. (and will do very little if there are no changes)
    npm run build This should not report any errors.
    npm start This should print "INF: Multi-peer Adapter listening on..."

In AltspaceVR

    Go to your personal home
    Make sure you are signed in properly, not a guest
    Activate the Space Editor (only available if you indicate you want to participate in the Early Access Program in your AltspaceVR settings)
    Click Basics group
    Click on SDKApp
    For the URL field, enter ws://127.0.0.1:3901
    Enter a session ID (This step will eventually be optional. For now, put in any random value)
    Click Confirm
    If the app doesn't seem to load, click on the gear icon next the MRE object in to the present objects list, and make sure "Is Playing" is checked.
    After the app has been placed, you will see the MRE Anchor (the white box with red/green/blue spikes on it), rendering on top of the MRE. You can use the anchor to move the MRE around. To hide the anchor, uncheck "Edit Mode".