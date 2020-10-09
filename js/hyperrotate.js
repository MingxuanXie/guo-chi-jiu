// Written by Mingxuan Xie (http://mingxuan.fun/)
AFRAME.registerComponent('hyperrotate', {
    tick: function (time, timeDelta) {
            this.el.object3D.rotation.x += Math.random();
            this.el.object3D.rotation.y += Math.random();
            this.el.object3D.rotation.z += Math.random();
    },
    pause: function (){
        var foo = Math.floor(Math.random() * 6);
        if(foo == 0){
            this.el.object3D.rotation.set(
                THREE.Math.degToRad(0),
                THREE.Math.degToRad(0),
                THREE.Math.degToRad(0)
            );
        } else if(foo == 1){
            this.el.object3D.rotation.set(
                THREE.Math.degToRad(-90),
                THREE.Math.degToRad(0),
                THREE.Math.degToRad(0)
            );
        } else if(foo == 2){
            this.el.object3D.rotation.set(
                THREE.Math.degToRad(90),
                THREE.Math.degToRad(0),
                THREE.Math.degToRad(0)
            );
        } else if(foo == 3){
            this.el.object3D.rotation.set(
                THREE.Math.degToRad(180),
                THREE.Math.degToRad(0),
                THREE.Math.degToRad(0)
            );
        } else if(foo == 4){
            this.el.object3D.rotation.set(
                THREE.Math.degToRad(180),
                THREE.Math.degToRad(90),
                THREE.Math.degToRad(0)
            );
        } else if(foo == 5){
            this.el.object3D.rotation.set(
                THREE.Math.degToRad(90),
                THREE.Math.degToRad(-90),
                THREE.Math.degToRad(0)
            );
        }
    }
});