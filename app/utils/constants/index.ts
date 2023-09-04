export const landingPageNavLinks = [
        {name:'Home',url:'/',},
        {name:'About',url:'about',},
        {name:'Product',url:'product',},
        { name: 'Earn smart', url: 'earn-smart' },
        { name: 'How it works', url: 'how-it-works' },
        {name:'Talk to us',url:'Talk to us',}
    // {
    //     link: '',
    //     name: 'home',
    // },
    // {
    //     link: '',
    //     name: 'about',
    // },
    // {
    //     link: '',
    //     name: 'product',
    // },
    // {
    //     link: '',
    //     name: 'resources',
    // }
]

export const landingPageCardList = [
    {
        color: 'text-green-400',
        iconName: 'bi:search',
        text:'Monitor your creative health scores internally and against peer benchmarks',
        title:'Learn about your creative', 
    },
    {
        color: 'text-red-400',
        iconName: 'tabler:test-pipe',
        text:'Monitor your creative health scores internally and against peer benchmarks',
        title:'Learn about your creative', 
    },
    {
        color: 'text-yellow-400',
        iconName: 'bi:bar-chart-fill',
        text:'Monitor your creative health scores internally and against peer benchmarks',
        title:'Learn about your creative', 
    },
]

export const aboutCardList = [
    {
        img: '/assets/img/create-ad.png',
        heading: 'For Business',
        title: 'Create seamless Ad campaign',
        text: 'Create an ad campaign with our easy to use automated ad tools to promote your business or product to reach as many potential customers as possible and encourage them to take a desired action. ',
        buttonText: 'Try for free',
        reverse: false,
    },
    {
        img: '/assets/img/manage-ad.png',
        heading: 'For Business',
        title: ' Manage your campaigns in one Ad space',
        text: ' With our ad space, you can create, monitor, and optimize your campaigns with just a few clicks. Our user-friendly interface makes it easy to track your performance and make adjustments on the fly. ',
        buttonText: 'Try for free',
        reverse: true,
    },
    {
        img: '/assets/img/featured-ad.png',
        heading: 'On the move',
        title: ' Featured campaings',
        text: 'With our ad tools you can Feature an ad from your lists of created campaign and gain more visibility. Pay less for more.',
        buttonText: 'Try for free',
        reverse: false,
    },
    {
        img: '/assets/img/sell-go.png',
        heading: 'On the move',
        title: ' Sell on the Go',
        text: "Take your business to the next level with the ability to sell on the go! With our well tailored tools you'll be able to reach customers wherever you are. Don't let location hold you back – start selling on the go today!",
        buttonText: 'Try for free',
        reverse: true,
    }
]

export const settingsLinks = [
    {
        icon: 'bi-pen-fill',
        link: '/merchant/settings',
        name: 'edit profile'
    },
    {
        icon: 'bxs:store-alt',
        link: '/merchant/settings/business',
        name: 'edit business profile'
    },
    {
        icon: 'carbon:security',
        link: '/merchant/settings/security',
        name: 'password & security'
    },
]


export const pricingCardInfo = [
    {
        btnText: 'Get started ',
        features: [
            'No setup fees or hidden fees',
            'Get feature updates',
            'Everything you need to manage ads',
            'Make up to 10 ads',
            'Show your ads in up to 10 locations',
        ],
        fee: '$0',
        subText: '',
        text: 'Access a complete set of generic features, to get started for free',
        title: 'basic',
        activate: true,
    },
    {
        btnText: 'Get started ',
        features: [
            'No setup fees or hidden fees',
            'Volume discounts',
            'Get hundreds of feature',
            'Everything you need to manage ads',
            'Make up to 10 ads',
            'Show your ads in up to 10 locations',
        ],
        fee: '$30',
        subText: '',
        text: 'Access a complete set of generic features, to get started for free',
        title: 'standard',
        activate: false
    },
    {
        btnText: 'Coming soon ',
        features: [
            'No setup fees or hidden fees',
            'Volume discounts',
            'Get hundreds of feature updates ',
            'Everything you need to manage ads',
            'Make up to 10 ads',
            'Show your ads in up to 10 locations',
        ],
        fee: '$100',
        subText: '',
        text: 'Access a complete set of generic features, to get started for free',
        title: 'Business',
        activate: false
    }   
]

export const connectOptions = [
    {
        label: "Chat me up button",
        value:"BUTTON"
    },
     {
        label: "Vist my link",
        value:"LINK"
    }
]
// regex
export const regex = /((http(s)?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/