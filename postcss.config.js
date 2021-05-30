module.exports = {
    plugins: [
        [
            "postcss-preset-env",
            {
                autoprefixer: {
                    grid: true
                }
            }
        ],
        [
            'postcss-pxtorem',
            {
                rootValue: 100,
                propList: ["*"]
            }
        ]
    ]
}