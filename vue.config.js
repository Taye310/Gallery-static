module.exports = {
    devServer: {
        proxy: {
            'http://localhost:8081':{
                target: 'http://localhost:8080',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    
                }
            }
        }
    }
}