
import * as THREE from 'three';
import metaversefile from 'metaversefile';
const { useApp, useLoaders, useFrame, useScene, useInternals, useLocalPlayer, useActivate, useUse, useWear, usePhysics, getAppByPhysicsId, useCleanup } = metaversefile;

//

const baseUrl = import.meta.url.replace(/(\/)[^\/\/]*$/, '$1');
console.log( baseUrl );

export default e => {

    const app = useApp();
    const { components } = app;
    const physics = usePhysics();

    const floorPhysicsId = physics.addBoxGeometry(
        new THREE.Vector3(0, -1000, 0),
        new THREE.Quaternion(),
        new THREE.Vector3(1000, 2000, 1000).multiplyScalar(0.5),
        false
    );

    const loadModel = ( params ) => {

        return new Promise( ( resolve, reject ) => {

            const { gltfLoader } = useLoaders();
            gltfLoader.load( params.filePath + params.fileName, ( gltf ) => {

                resolve( gltf.scene );

            });

        });

    };

    useFrame(() => {

        // todo

    });

    useCleanup(() => {

        physics.removeGeometry(floorPhysicsId);

    });

    let pod = loadModel({ filePath: baseUrl, fileName: 'assets/space_pod.glb', pos: { x: 0, y: 0, z: 0 } } ).then( result => {

        physics.addGeometry( result );
        app.add( result );

    });

    return app;

};
