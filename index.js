
import metaversefile from 'metaversefile';
const { useApp, useLoaders, useFrame, useScene, useInternals, useLocalPlayer, useActivate, useUse, useWear, usePhysics, getAppByPhysicsId, useCleanup } = metaversefile;

//

const baseUrl = import.meta.url.replace(/(\/)[^\/\/]*$/, '$1');
console.log( baseUrl );

export default e => {

    const app = useApp();
    const { components } = app;
    const physics = usePhysics();

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

        // todo

    });

    let pod = loadModel({ filePath: baseUrl, fileName: 'assets/space_pod.glb', pos: { x: 0, y: 0, z: 0 } } ).then( result => { vehicleObj = result } );

    return app;

};
