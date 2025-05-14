import type { Schema, Struct } from '@strapi/strapi';

export interface BlogWidgetItemsBeautyShotItems extends Struct.ComponentSchema {
  collectionName: 'components_blog_widget_items_beauty_shot_items';
  info: {
    description: '';
    displayName: 'BeautyShotItems';
    icon: 'chevron-up';
  };
  attributes: {
    content: Schema.Attribute.String;
    imageAltText: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    Item_name: Schema.Attribute.String;
    Item_type: Schema.Attribute.Enumeration<
      ['product', 'offer', 'promotion', 'banner', 'category', 'brand']
    >;
    path: Schema.Attribute.String;
    playIconUrl: Schema.Attribute.String;
    videoUrl: Schema.Attribute.String;
  };
}

export interface BlogWidgetItemsBenefitsItem extends Struct.ComponentSchema {
  collectionName: 'components_blog_widget_items_benefits_items';
  info: {
    description: '';
    displayName: 'BenefitsItem';
    icon: 'city';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    embedText: Schema.Attribute.RichText;
    headingLevel: Schema.Attribute.Enumeration<['one', 'two', 'three']>;
    imageAltText: Schema.Attribute.String;
    imageDirection: Schema.Attribute.Boolean;
    imageUrl: Schema.Attribute.String;
    Item_name: Schema.Attribute.String;
    Item_type: Schema.Attribute.Enumeration<
      ['product', 'offer', 'promotion', 'banner', 'category', 'brand']
    >;
    mobileImageurl: Schema.Attribute.String;
    path: Schema.Attribute.String;
    shadowImage: Schema.Attribute.String;
    showEmbed: Schema.Attribute.Boolean;
    subTitle: Schema.Attribute.String;
  };
}

export interface BlogWidgetItemsBlogBeautyStopItem
  extends Struct.ComponentSchema {
  collectionName: 'components_blog_widget_items_blog_beauty_stop_items';
  info: {
    description: '';
    displayName: 'BlogBeautyStopItem';
    icon: 'comment-dollar';
  };
  attributes: {
    contentType: Schema.Attribute.String;
    imageAltText: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    imgPath: Schema.Attribute.String;
    Item_name: Schema.Attribute.String;
    Item_type: Schema.Attribute.Enumeration<
      ['product', 'offer', 'promotion', 'banner', 'category', 'brand']
    >;
    path: Schema.Attribute.String;
    shareIcon: Schema.Attribute.String;
    shareText: Schema.Attribute.String;
    subText: Schema.Attribute.String;
    title: Schema.Attribute.String;
    views: Schema.Attribute.String;
    viewsIcon: Schema.Attribute.String;
    viewsText: Schema.Attribute.String;
  };
}

export interface BlogWidgetItemsBlogCarouselItem
  extends Struct.ComponentSchema {
  collectionName: 'components_blog_widget_items_blog_carousel_items';
  info: {
    description: '';
    displayName: 'BlogCarouselItem';
    icon: 'building';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    imageAltText: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    imgPath: Schema.Attribute.String;
    Item_name: Schema.Attribute.String;
    Item_type: Schema.Attribute.Enumeration<
      ['product', 'offer', 'promotion', 'banner', 'category', 'brand']
    >;
    mobileImageUrl: Schema.Attribute.String;
    noOfViews: Schema.Attribute.String;
    path: Schema.Attribute.String;
    shareIcon: Schema.Attribute.String;
    shareText: Schema.Attribute.String;
    subText: Schema.Attribute.String;
    text: Schema.Attribute.String;
    viewsIcon: Schema.Attribute.String;
    viewsText: Schema.Attribute.String;
  };
}

export interface BlogWidgetItemsBlogDetailItem extends Struct.ComponentSchema {
  collectionName: 'components_blog_widget_items_blog_detail_items';
  info: {
    description: '';
    displayName: 'BlogDetailItem';
    icon: 'ellipsis-h';
  };
  attributes: {
    arrowCarouselImageUrl: Schema.Attribute.String;
    galleryCarouselButtonText: Schema.Attribute.String;
    imageAltText: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    imgPath: Schema.Attribute.String;
    Item_name: Schema.Attribute.String;
    Item_type: Schema.Attribute.Enumeration<
      ['product', 'offer', 'promotion', 'banner', 'category', 'brand']
    >;
    mobileImageUrl: Schema.Attribute.String;
    videoButtonImageUrl: Schema.Attribute.String;
    videoUrl: Schema.Attribute.String;
  };
}

export interface BlogWidgetItemsBlogFrame extends Struct.ComponentSchema {
  collectionName: 'components_blog_widget_items_blog_frames';
  info: {
    description: '';
    displayName: 'BlogFrame';
    icon: 'angle-down';
  };
  attributes: {
    frameHeight: Schema.Attribute.String;
    frameHeightMobile: Schema.Attribute.String;
    frameWidth: Schema.Attribute.String;
    frameWidthMobile: Schema.Attribute.String;
    Item_name: Schema.Attribute.String;
    Item_type: Schema.Attribute.Enumeration<
      ['product', 'offer', 'promotion', 'banner', 'category', 'brand']
    >;
  };
}

export interface BlogWidgetItemsBlogGridItem extends Struct.ComponentSchema {
  collectionName: 'components_blog_widget_items_blog_grid_items';
  info: {
    description: '';
    displayName: 'BlogGridItem';
    icon: 'bread-slice';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    eyeLogo: Schema.Attribute.String;
    headText: Schema.Attribute.String;
    imageAltText: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    imgPath: Schema.Attribute.String;
    Item_name: Schema.Attribute.String;
    Item_type: Schema.Attribute.Enumeration<
      ['product', 'offer', 'promotion', 'banner', 'category', 'brand']
    >;
    mobileImageUrl: Schema.Attribute.String;
    path: Schema.Attribute.String;
    readText: Schema.Attribute.String;
    shareLogo: Schema.Attribute.String;
    shareText: Schema.Attribute.String;
    views: Schema.Attribute.String;
    viewsText: Schema.Attribute.String;
  };
}

export interface BlogWidgetItemsBlogHeroBannerItem
  extends Struct.ComponentSchema {
  collectionName: 'components_blog_widget_items_blog_hero_banner_items';
  info: {
    description: '';
    displayName: 'BlogHeroBannerItem';
    icon: 'boxes';
  };
  attributes: {
    chipText: Schema.Attribute.String;
    image: Schema.Attribute.String;
    imageAltText: Schema.Attribute.String;
    imgPath: Schema.Attribute.String;
    Item_name: Schema.Attribute.String;
    Item_type: Schema.Attribute.Enumeration<
      ['product', 'offer', 'promotion', 'banner', 'category', 'brand']
    >;
    mobileImage: Schema.Attribute.String;
    path: Schema.Attribute.String;
    readButton: Schema.Attribute.String;
    subText: Schema.Attribute.String;
  };
}

export interface BlogWidgetItemsBlogLinksItem extends Struct.ComponentSchema {
  collectionName: 'components_blog_widget_items_blog_links_items';
  info: {
    description: '';
    displayName: 'BlogLinksItem';
    icon: 'border-all';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    imageAltText: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    imgPath: Schema.Attribute.String;
    Item_name: Schema.Attribute.String;
    Item_type: Schema.Attribute.Enumeration<
      ['product', 'offer', 'promotion', 'banner', 'category', 'brand']
    >;
    mobileImageUrl: Schema.Attribute.String;
    noOfViews: Schema.Attribute.String;
    path: Schema.Attribute.String;
    readMore: Schema.Attribute.String;
    shareIcon: Schema.Attribute.String;
    shareText: Schema.Attribute.String;
    subText: Schema.Attribute.String;
    text: Schema.Attribute.String;
    viewsIcon: Schema.Attribute.String;
    viewsText: Schema.Attribute.String;
  };
}

export interface BlogWidgetItemsBlogListItem extends Struct.ComponentSchema {
  collectionName: 'components_blog_widget_items_blog_list_items';
  info: {
    description: '';
    displayName: 'BlogListItem';
    icon: 'briefcase';
  };
  attributes: {
    chiptext: Schema.Attribute.String;
    imageAltText: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    imgPath: Schema.Attribute.String;
    imgUrlMobile: Schema.Attribute.String;
    isSharable: Schema.Attribute.Boolean;
    isVideo: Schema.Attribute.Boolean;
    Item_name: Schema.Attribute.String;
    Item_type: Schema.Attribute.Enumeration<
      ['product', 'offer', 'promotion', 'banner', 'category', 'brand']
    >;
    playIconUrlApp: Schema.Attribute.String;
    playIconUrlWeb: Schema.Attribute.String;
    position: Schema.Attribute.Boolean;
    readMorePath: Schema.Attribute.String;
    readMoreText: Schema.Attribute.String;
    shareIcon: Schema.Attribute.String;
    shareText: Schema.Attribute.String;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    videoUrl: Schema.Attribute.String;
    views: Schema.Attribute.String;
    viewsIcon: Schema.Attribute.String;
    viewText: Schema.Attribute.String;
  };
}

export interface BlogWidgetItemsBlogThumbnailItems
  extends Struct.ComponentSchema {
  collectionName: 'components_blog_widget_items_blog_thumbnail_items';
  info: {
    description: '';
    displayName: 'BlogThumbnailItem';
    icon: 'ellipsis-v';
  };
  attributes: {
    button: Schema.Attribute.String;
    imageAltText: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    imgPath: Schema.Attribute.String;
    Item_name: Schema.Attribute.String;
    Item_type: Schema.Attribute.Enumeration<
      ['product', 'offer', 'promotion', 'banner', 'category', 'brand']
    >;
    numberOfViews: Schema.Attribute.String;
    readMore: Schema.Attribute.String;
    readMorepath: Schema.Attribute.String;
    shareIcon: Schema.Attribute.String;
    shareText: Schema.Attribute.String;
    subTitle: Schema.Attribute.String;
    viewsIcon: Schema.Attribute.String;
    viewsText: Schema.Attribute.String;
  };
}

export interface BlogWidgetItemsBlogVideosItem extends Struct.ComponentSchema {
  collectionName: 'components_blog_widget_items_blog_videos_items';
  info: {
    description: '';
    displayName: 'BlogVideosItem';
    icon: 'grip-lines';
  };
  attributes: {
    ContentText: Schema.Attribute.String;
    imageAltText: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    imgPath: Schema.Attribute.String;
    Item_name: Schema.Attribute.String;
    Item_type: Schema.Attribute.Enumeration<
      ['product', 'offer', 'promotion', 'banner', 'category', 'brand']
    >;
    mobileImageUrl: Schema.Attribute.String;
    text: Schema.Attribute.String;
    videoButtonImageUrl: Schema.Attribute.String;
    videoUrl: Schema.Attribute.String;
  };
}

export interface BlogWidgetItemsGalleryItem extends Struct.ComponentSchema {
  collectionName: 'components_blog_widget_items_gallery_items';
  info: {
    description: '';
    displayName: 'BlogGalleryItem';
    icon: 'database';
  };
  attributes: {
    brandText: Schema.Attribute.String;
    buttonBgcolor: Schema.Attribute.String;
    buttonPath: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    closeCircle: Schema.Attribute.String;
    consHeading: Schema.Attribute.String;
    consText: Schema.Attribute.String;
    content: Schema.Attribute.Text;
    imageAltText: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    Item_name: Schema.Attribute.String;
    Item_type: Schema.Attribute.Enumeration<
      ['product', 'offer', 'promotion', 'banner', 'category', 'brand']
    >;
    mobileImage: Schema.Attribute.String;
    prosConsUrl: Schema.Attribute.String;
    prosHeading: Schema.Attribute.String;
    prosText: Schema.Attribute.String;
    tickCircle: Schema.Attribute.String;
  };
}

export interface BlogWidgetItemsNavItem extends Struct.ComponentSchema {
  collectionName: 'components_blog_widget_items_nav_items';
  info: {
    description: '';
    displayName: 'NavItem';
    icon: 'chart-pie';
  };
  attributes: {
    isTabActive: Schema.Attribute.Boolean;
    list: Schema.Attribute.Component<'blog-widget-items.nav-sub-item', true>;
    title: Schema.Attribute.String;
    titlePath: Schema.Attribute.String;
  };
}

export interface BlogWidgetItemsNavSubItem extends Struct.ComponentSchema {
  collectionName: 'components_blog_widget_items_nav_sub_items';
  info: {
    description: '';
    displayName: 'NavSubItem';
    icon: 'hdd';
  };
  attributes: {
    Item_name: Schema.Attribute.String;
    Item_type: Schema.Attribute.Enumeration<
      ['product', 'offer', 'promotion', 'banner', 'category', 'brand']
    >;
    label: Schema.Attribute.String;
    labelPath: Schema.Attribute.String;
  };
}

export interface BlogWidgetBlogBeautyShots extends Struct.ComponentSchema {
  collectionName: 'components_blog_widget_blog_beauty_shots';
  info: {
    description: '';
    displayName: 'BlogBeautyShots';
    icon: 'arrow-up';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    buttonPath: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    display: Schema.Attribute.Enumeration<['web', 'mobile']>;
    frame: Schema.Attribute.Component<'blog-widget-items.blog-frame', false>;
    items: Schema.Attribute.Component<
      'blog-widget-items.beauty-shot-items',
      true
    >;
    keys: Schema.Attribute.String;
    title: Schema.Attribute.String;
    viewMore: Schema.Attribute.Boolean;
    visibility: Schema.Attribute.Enumeration<['all', 'web', 'app', 'hidden']> &
      Schema.Attribute.DefaultTo<'all'>;
  };
}

export interface BlogWidgetBlogBeautyStop extends Struct.ComponentSchema {
  collectionName: 'components_blog_widget_blog_beauty_stops';
  info: {
    description: '';
    displayName: 'BlogBeautyStop';
    icon: 'bold';
  };
  attributes: {
    beautyButton: Schema.Attribute.String;
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    buttonPath: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    cardDescription: Schema.Attribute.String;
    cardTitle: Schema.Attribute.String;
    display: Schema.Attribute.Enumeration<['web', 'mobile']>;
    flag: Schema.Attribute.Boolean;
    imageAltText: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    imgPath: Schema.Attribute.String;
    items: Schema.Attribute.Component<
      'blog-widget-items.blog-beauty-stop-item',
      true
    >;
    keys: Schema.Attribute.String;
    shareIcon: Schema.Attribute.String;
    shareText: Schema.Attribute.String;
    subText: Schema.Attribute.String;
    title: Schema.Attribute.String;
    viewIcon: Schema.Attribute.String;
    viewMore: Schema.Attribute.String;
    viewMorePath: Schema.Attribute.String;
    views: Schema.Attribute.String;
    viewsText: Schema.Attribute.String;
    visibility: Schema.Attribute.Enumeration<['all', 'web', 'app', 'hidden']> &
      Schema.Attribute.DefaultTo<'all'>;
  };
}

export interface BlogWidgetBlogBenefits extends Struct.ComponentSchema {
  collectionName: 'components_blog_widget_blog_benefits';
  info: {
    description: '';
    displayName: 'BlogBenefits';
    icon: 'gift';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    display: Schema.Attribute.Enumeration<['web', 'mobile']>;
    enableJumplinks: Schema.Attribute.Boolean;
    items: Schema.Attribute.Component<'blog-widget-items.benefits-item', true>;
    keys: Schema.Attribute.String;
    title: Schema.Attribute.String;
    visibility: Schema.Attribute.Enumeration<['all', 'web', 'app', 'hidden']> &
      Schema.Attribute.DefaultTo<'all'>;
  };
}

export interface BlogWidgetBlogBreadcrumb extends Struct.ComponentSchema {
  collectionName: 'components_blog_widget_blog_breadcrumbs';
  info: {
    description: '';
    displayName: 'BlogBreadcrumb';
    icon: 'backward';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    display: Schema.Attribute.Enumeration<['web', 'mobile']>;
    isComponentDiffer: Schema.Attribute.Boolean;
    levelFourPath: Schema.Attribute.String;
    levelFourText: Schema.Attribute.String;
    levelOnePath: Schema.Attribute.String;
    levelOneText: Schema.Attribute.String;
    levelThreePath: Schema.Attribute.String;
    levelThreeText: Schema.Attribute.String;
    levelTwoPath: Schema.Attribute.String;
    levelTwoText: Schema.Attribute.String;
  };
}

export interface BlogWidgetBlogCarousel extends Struct.ComponentSchema {
  collectionName: 'components_blog_widget_blog_carousels';
  info: {
    description: '';
    displayName: 'BlogCarousel';
    icon: 'caret-square-right';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    button: Schema.Attribute.String;
    buttonPath: Schema.Attribute.String;
    display: Schema.Attribute.Enumeration<['web', 'mobile']>;
    items: Schema.Attribute.Component<
      'blog-widget-items.blog-carousel-item',
      true
    >;
    keys: Schema.Attribute.String;
    title: Schema.Attribute.String;
    visibility: Schema.Attribute.Enumeration<['all', 'web', 'app', 'hidden']> &
      Schema.Attribute.DefaultTo<'all'>;
  };
}

export interface BlogWidgetBlogDetail extends Struct.ComponentSchema {
  collectionName: 'components_blog_widget_blog_details';
  info: {
    description: '';
    displayName: 'BlogDetail';
    icon: 'grip-horizontal';
  };
  attributes: {
    arrowImageUrl: Schema.Attribute.String;
    authorNamePath: Schema.Attribute.String;
    bannerItems: Schema.Attribute.Component<
      'blog-widget-items.blog-detail-item',
      true
    >;
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    button: Schema.Attribute.String;
    display: Schema.Attribute.Enumeration<['web', 'mobile']>;
    galleryButtonText: Schema.Attribute.String;
    galleryImageUrl: Schema.Attribute.String;
    galleryItems: Schema.Attribute.Component<
      'blog-widget-items.gallery-item',
      true
    >;
    heading: Schema.Attribute.String;
    imageAltText: Schema.Attribute.String;
    keys: Schema.Attribute.String;
    name: Schema.Attribute.String;
    numberOfViews: Schema.Attribute.String;
    paragraph: Schema.Attribute.RichText;
    subheading: Schema.Attribute.String;
    topButtonPath: Schema.Attribute.String;
    visibility: Schema.Attribute.Enumeration<['all', 'web', 'app', 'hidden']> &
      Schema.Attribute.DefaultTo<'all'>;
  };
}

export interface BlogWidgetBlogGrid extends Struct.ComponentSchema {
  collectionName: 'components_blog_widget_blog_grids';
  info: {
    description: '';
    displayName: 'BlogGrid';
    icon: 'barcode';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    display: Schema.Attribute.Enumeration<['web', 'mobile']>;
    items: Schema.Attribute.Component<'blog-widget-items.blog-grid-item', true>;
    keys: Schema.Attribute.String;
    Maintext: Schema.Attribute.String;
    visibility: Schema.Attribute.Enumeration<['all', 'web', 'app', 'hidden']> &
      Schema.Attribute.DefaultTo<'all'>;
  };
}

export interface BlogWidgetBlogHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_blog_widget_blog_hero_banners';
  info: {
    description: '';
    displayName: 'BlogHeroBanner';
    icon: 'bowling-ball';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    display: Schema.Attribute.Enumeration<['web', 'mobile']>;
    items: Schema.Attribute.Component<
      'blog-widget-items.blog-hero-banner-item',
      true
    >;
    keys: Schema.Attribute.String;
    title: Schema.Attribute.String;
    visibility: Schema.Attribute.Enumeration<['all', 'web', 'app', 'hidden']> &
      Schema.Attribute.DefaultTo<'all'>;
  };
}

export interface BlogWidgetBlogLinks extends Struct.ComponentSchema {
  collectionName: 'components_blog_widget_blog_links';
  info: {
    description: '';
    displayName: 'BlogLinks';
    icon: 'border-none';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    display: Schema.Attribute.Enumeration<['web', 'mobile']>;
    items: Schema.Attribute.Component<
      'blog-widget-items.blog-links-item',
      true
    >;
    keys: Schema.Attribute.String;
    title: Schema.Attribute.RichText;
    viewMore: Schema.Attribute.String;
    viewMorePath: Schema.Attribute.String;
    visibility: Schema.Attribute.Enumeration<['all', 'web', 'app', 'hidden']> &
      Schema.Attribute.DefaultTo<'all'>;
  };
}

export interface BlogWidgetBlogList extends Struct.ComponentSchema {
  collectionName: 'components_blog_widget_blog_lists';
  info: {
    description: '';
    displayName: 'BlogList';
    icon: 'credit-card';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    desktopColumns: Schema.Attribute.Integer;
    display: Schema.Attribute.Enumeration<['web', 'mobile']>;
    isComponent: Schema.Attribute.Boolean;
    items: Schema.Attribute.Component<'blog-widget-items.blog-list-item', true>;
    keys: Schema.Attribute.String;
    mobileColumns: Schema.Attribute.Integer;
    sortByBottom: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
    viewAllPath: Schema.Attribute.String;
    viewAllText: Schema.Attribute.String;
    visibility: Schema.Attribute.Enumeration<['all', 'web', 'app', 'hidden']> &
      Schema.Attribute.DefaultTo<'all'>;
  };
}

export interface BlogWidgetBlogNavigation extends Struct.ComponentSchema {
  collectionName: 'components_blog_widget_blog_navigations';
  info: {
    displayName: 'BlogNavigation';
    icon: 'file-prescription';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    items: Schema.Attribute.Component<'blog-widget-items.nav-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlogWidgetBlogParagraph extends Struct.ComponentSchema {
  collectionName: 'components_blog_widget_blog_paragraphs';
  info: {
    description: '';
    displayName: 'BlogParagraph';
    icon: 'calendar-day';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    display: Schema.Attribute.Enumeration<['web', 'mobile']>;
    keys: Schema.Attribute.String;
    title: Schema.Attribute.RichText;
    visibility: Schema.Attribute.Enumeration<['all', 'web', 'app', 'hidden']> &
      Schema.Attribute.DefaultTo<'all'>;
  };
}

export interface BlogWidgetBlogProfile extends Struct.ComponentSchema {
  collectionName: 'components_blog_widget_blog_profiles';
  info: {
    description: '';
    displayName: 'BlogProfile';
    icon: 'procedures';
  };
  attributes: {
    authorDescription: Schema.Attribute.Text;
    authorImage: Schema.Attribute.String;
    authorName: Schema.Attribute.String;
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    display: Schema.Attribute.Enumeration<['web', 'mobile']>;
    imageAltText: Schema.Attribute.String;
    keys: Schema.Attribute.String;
    title: Schema.Attribute.String;
    visibility: Schema.Attribute.Enumeration<['all', 'web', 'app', 'hidden']> &
      Schema.Attribute.DefaultTo<'all'>;
  };
}

export interface BlogWidgetBlogQuote extends Struct.ComponentSchema {
  collectionName: 'components_blog_widget_blog_quotes';
  info: {
    description: '';
    displayName: 'BlogQuote';
    icon: 'battery-three-quarters';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    display: Schema.Attribute.Enumeration<['web', 'mobile']>;
    text: Schema.Attribute.RichText;
  };
}

export interface BlogWidgetBlogThumbnail extends Struct.ComponentSchema {
  collectionName: 'components_blog_widget_blog_thumbnails';
  info: {
    description: '';
    displayName: 'BlogThumbnail';
    icon: 'chess-board';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    display: Schema.Attribute.Enumeration<['web', 'mobile']>;
    items: Schema.Attribute.Component<
      'blog-widget-items.blog-thumbnail-items',
      true
    >;
    keys: Schema.Attribute.String;
    title: Schema.Attribute.String;
    viewMore: Schema.Attribute.String;
    viewMorePath: Schema.Attribute.String;
    visibility: Schema.Attribute.Enumeration<['all', 'web', 'app', 'hidden']> &
      Schema.Attribute.DefaultTo<'all'>;
  };
}

export interface BlogWidgetBlogVideos extends Struct.ComponentSchema {
  collectionName: 'components_blog_widget_blog_videos';
  info: {
    description: '';
    displayName: 'BlogVideos';
    icon: 'video';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    display: Schema.Attribute.Enumeration<['web', 'mobile']>;
    isLarge: Schema.Attribute.Boolean;
    items: Schema.Attribute.Component<
      'blog-widget-items.blog-videos-item',
      true
    >;
    keys: Schema.Attribute.String;
    visibility: Schema.Attribute.Enumeration<['all', 'web', 'app', 'hidden']> &
      Schema.Attribute.DefaultTo<'all'>;
  };
}

export interface BlogWidgetWishlist extends Struct.ComponentSchema {
  collectionName: 'components_blog_widget_wishlists';
  info: {
    description: '';
    displayName: 'Wishlist';
    icon: 'weight-hanging';
  };
  attributes: {
    buttonPath: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    errorMessage: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SeoMeta extends Struct.ComponentSchema {
  collectionName: 'components_seo_metas';
  info: {
    description: '';
    displayName: 'Meta';
    icon: 'anchor';
  };
  attributes: {
    content: Schema.Attribute.String;
    name: Schema.Attribute.String;
    script: Schema.Attribute.RichText;
    tagType: Schema.Attribute.Enumeration<['link', 'meta', 'script']>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface WidgetItemsAccordionItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_accordion_items';
  info: {
    description: '';
    displayName: 'AccordionItem';
    icon: 'address-card';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    titlePath: Schema.Attribute.String;
  };
}

export interface WidgetItemsAdviceItems extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_advice_items';
  info: {
    displayName: 'AdviceItems';
    icon: 'first-aid';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    imgUrl: Schema.Attribute.String;
    imgUrlMobile: Schema.Attribute.String;
    path: Schema.Attribute.String;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface WidgetItemsAppIconItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_app_icon_items';
  info: {
    description: '';
    displayName: 'appIconItem';
    icon: 'align-justify';
  };
  attributes: {
    identifier: Schema.Attribute.Boolean;
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
    url_png: Schema.Attribute.String;
  };
}

export interface WidgetItemsBeautyStopItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_beauty_stop_items';
  info: {
    description: '';
    displayName: 'BeautyStopItem';
    icon: 'align-right';
  };
  attributes: {
    contentType: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    Item_name: Schema.Attribute.String;
    Item_type: Schema.Attribute.Enumeration<
      ['product', 'offer', 'promotion', 'banner', 'category', 'brand']
    >;
    path: Schema.Attribute.String;
    shareIcon: Schema.Attribute.String;
    shareText: Schema.Attribute.String;
    subText: Schema.Attribute.String;
    title: Schema.Attribute.String;
    views: Schema.Attribute.String;
    viewsIcon: Schema.Attribute.String;
    viewsText: Schema.Attribute.String;
  };
}

export interface WidgetItemsBottomNavItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_bottom_nav_items';
  info: {
    displayName: 'BottomNavItem';
    icon: 'euro-sign';
  };
  attributes: {
    activeColor: Schema.Attribute.String;
    description: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    identifiers: Schema.Attribute.String;
    path: Schema.Attribute.String;
    subItems: Schema.Attribute.Component<
      'widget-items.bottom-nav-s-item',
      true
    >;
    text: Schema.Attribute.String;
    textColor: Schema.Attribute.String;
  };
}

export interface WidgetItemsBottomNavSItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_bottom_nav_s_items';
  info: {
    displayName: 'BottomNavSItem';
    icon: 'compress';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    imgUrl: Schema.Attribute.String;
    imgUrlMobile: Schema.Attribute.String;
    path: Schema.Attribute.String;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface WidgetItemsBrandDescriptionItem
  extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_brand_description_items';
  info: {
    displayName: 'BrandDescriptionItem';
    icon: 'sliders-h';
  };
  attributes: {
    iconPath: Schema.Attribute.String;
    iconUrl: Schema.Attribute.String;
  };
}

export interface WidgetItemsBrandItems extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_brand_items';
  info: {
    displayName: 'BrandItems';
    icon: 'box';
  };
  attributes: {
    BrandSubItems: Schema.Attribute.Component<
      'widget-items.brand-sub-items',
      true
    >;
    module: Schema.Attribute.String;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['static', 'dynamic']>;
  };
}

export interface WidgetItemsBrandListItems extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_brand_list_items';
  info: {
    description: '';
    displayName: 'BrandListItems';
    icon: 'asterisk';
  };
  attributes: {
    brandCode: Schema.Attribute.String;
    brandName: Schema.Attribute.String;
    hide: Schema.Attribute.Boolean;
    mappingSlug: Schema.Attribute.String;
    navType: Schema.Attribute.Enumeration<['listing', 'landing']>;
    navUrl: Schema.Attribute.String;
  };
}

export interface WidgetItemsBrandSubItems extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_brand_sub_items';
  info: {
    displayName: 'BrandSubItems';
    icon: 'boxes';
  };
  attributes: {
    altText: Schema.Attribute.String;
    ctaUrl: Schema.Attribute.String;
    logoUrl: Schema.Attribute.String;
  };
}

export interface WidgetItemsBrandsGridItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_brands_grid_items';
  info: {
    displayName: 'BrandsGridItem';
    icon: 'bone';
  };
  attributes: {
    imageUrl: Schema.Attribute.String;
    imageUrlMobile: Schema.Attribute.String;
    isNewTab: Schema.Attribute.Boolean;
    path: Schema.Attribute.String;
  };
}

export interface WidgetItemsCartHeaderItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_cart_header_items';
  info: {
    displayName: 'cartHeaderItem';
    icon: 'flag';
  };
  attributes: {
    isTextColorActive: Schema.Attribute.String;
    isTextColorInactive: Schema.Attribute.String;
    text: Schema.Attribute.String;
    textColor: Schema.Attribute.String;
    textOnHeader: Schema.Attribute.Boolean;
    textPath: Schema.Attribute.String;
  };
}

export interface WidgetItemsCategories extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_categories';
  info: {
    displayName: 'categories';
    icon: 'box-open';
  };
  attributes: {};
}

export interface WidgetItemsCategoryCarouselItem
  extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_category_carousel_items';
  info: {
    displayName: 'CategoryCarouselItem';
    icon: 'award';
  };
  attributes: {
    imageUrl: Schema.Attribute.String;
    isNewTab: Schema.Attribute.Boolean;
    Path: Schema.Attribute.String;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface WidgetItemsCategoryVideosItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_category_videos_items';
  info: {
    description: '';
    displayName: 'CategoryVideosItem';
    icon: 'align-justify';
  };
  attributes: {
    imgUrlApp: Schema.Attribute.String;
    imgUrlWeb: Schema.Attribute.String;
    isVideo: Schema.Attribute.Boolean;
    playIconApp: Schema.Attribute.String;
    playIconUrl: Schema.Attribute.String;
    playIconWeb: Schema.Attribute.String;
    subTitle: Schema.Attribute.Text;
    text: Schema.Attribute.String;
    VideoIconUrl: Schema.Attribute.String;
  };
}

export interface WidgetItemsConfigurationItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_configuration_items';
  info: {
    description: '';
    displayName: 'ConfigurationItem';
    icon: 'circle';
  };
  attributes: {
    key: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface WidgetItemsConsultServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_consult_service_items';
  info: {
    description: '';
    displayName: 'ConsultServiceItem';
    icon: 'cart-arrow-down';
  };
  attributes: {
    freeText: Schema.Attribute.String;
    identifier: Schema.Attribute.String;
    imgPath: Schema.Attribute.String;
    imgUrl: Schema.Attribute.String;
    imgUrlMobile: Schema.Attribute.String;
    paymentsTrailText: Schema.Attribute.String;
    selectedItem: Schema.Attribute.String;
    serviceDropDownTitle: Schema.Attribute.String;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    trailText: Schema.Attribute.String;
  };
}

export interface WidgetItemsContactDetails extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_contact_details';
  info: {
    description: '';
    displayName: 'ContactDetails';
    icon: 'business-time';
  };
  attributes: {
    details: Schema.Attribute.RichText;
    header: Schema.Attribute.String;
  };
}

export interface WidgetItemsContactForm extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_contact_forms';
  info: {
    description: '';
    displayName: 'ContactForm';
    icon: 'cash-register';
  };
  attributes: {
    errorMessage: Schema.Attribute.String;
    input_type: Schema.Attribute.String;
    isRequired: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
    list: Schema.Attribute.Component<'widget-items.contact-sub-list', true>;
    maxLength: Schema.Attribute.Integer;
    md: Schema.Attribute.String;
    name: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
    type: Schema.Attribute.String;
    validationType: Schema.Attribute.String;
    xs: Schema.Attribute.String;
  };
}

export interface WidgetItemsContactSubList extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_contact_sub_lists';
  info: {
    description: '';
    displayName: 'ContactSubList';
    icon: 'bell-slash';
  };
  attributes: {
    group: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface WidgetItemsEventsItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_events_items';
  info: {
    description: '';
    displayName: 'EventsItem';
    icon: 'box';
  };
  attributes: {
    date: Schema.Attribute.RichText;
    description: Schema.Attribute.RichText;
    eventDetailsTitle: Schema.Attribute.String;
    imgPath: Schema.Attribute.String;
    imgUrl: Schema.Attribute.String;
    imgUrlMobile: Schema.Attribute.String;
    location: Schema.Attribute.RichText;
    price: Schema.Attribute.RichText;
    registerBtn: Schema.Attribute.String;
    registerBtnPath: Schema.Attribute.String;
    time: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface WidgetItemsExpertAdviceItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_expert_advice_items';
  info: {
    displayName: 'ExpertAdviceItem';
    icon: 'calendar';
  };
  attributes: {
    iconUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
    titlePath: Schema.Attribute.String;
  };
}

export interface WidgetItemsFcNavItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_fc_nav_items';
  info: {
    description: '';
    displayName: 'FcNavItem';
    icon: 'bug';
  };
  attributes: {
    key: Schema.Attribute.Boolean;
    tier: Schema.Attribute.Enumeration<
      ['tierOne', 'tierTwo', 'tierThree', 'tierFour']
    >;
    title: Schema.Attribute.String;
    titlePath: Schema.Attribute.String;
  };
}

export interface WidgetItemsFcTierDescription extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_fc_tier_descriptions';
  info: {
    description: '';
    displayName: 'FcTierDescription';
    icon: 'dice-three';
  };
  attributes: {
    alignment: Schema.Attribute.Boolean;
    bgColor: Schema.Attribute.String;
    bgImageUrl: Schema.Attribute.String;
    bgImageUrlMobile: Schema.Attribute.String;
    crownLogo: Schema.Attribute.String;
    crownLogoPath: Schema.Attribute.String;
    enrollButtonPath: Schema.Attribute.String;
    enrollButtonText: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    imageUrlPath: Schema.Attribute.String;
    quote: Schema.Attribute.String;
    subText: Schema.Attribute.String;
    tier: Schema.Attribute.Enumeration<
      ['tierOne', 'tierTwo', 'tierThree', 'tierFour']
    >;
    tierBenefits: Schema.Attribute.RichText;
    tierDescription: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface WidgetItemsFooterCopyRightItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_footer_copy_right_items';
  info: {
    displayName: 'FooterCopyRightItem';
    icon: 'basketball-ball';
  };
  attributes: {
    path: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface WidgetItemsFooterItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_footer_items';
  info: {
    description: '';
    displayName: 'FooterItem';
    icon: 'th-list';
  };
  attributes: {
    subItems: Schema.Attribute.Component<'widget-items.footer-sub-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface WidgetItemsFooterPaymentItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_footer_payment_items';
  info: {
    description: '';
    displayName: 'FooterPaymentItem';
    icon: 'atlas';
  };
  attributes: {
    imagePath: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    isNewTab: Schema.Attribute.Boolean;
    secondImageUrl: Schema.Attribute.String;
    secondImageUrlPath: Schema.Attribute.String;
    subText: Schema.Attribute.String;
    subTextMobile: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface WidgetItemsFooterSubItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_footer_sub_items';
  info: {
    displayName: 'FooterSubItem';
    icon: 'clipboard-list';
  };
  attributes: {
    path: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface WidgetItemsGetTheAppItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_get_the_app_items';
  info: {
    displayName: 'GetTheAppItem';
    icon: 'comment-alt';
  };
  attributes: {
    description: Schema.Attribute.String;
    label: Schema.Attribute.String;
    number: Schema.Attribute.String;
  };
}

export interface WidgetItemsGiftCardDetail extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_gift_card_details';
  info: {
    description: '';
    displayName: 'GiftCardDetail';
    icon: 'box-open';
  };
  attributes: {
    cols: Schema.Attribute.String;
    editIcon: Schema.Attribute.String;
    imagePath: Schema.Attribute.String;
    imageUrlMobile: Schema.Attribute.String;
    imgUrl: Schema.Attribute.String;
    path: Schema.Attribute.String;
    rows: Schema.Attribute.String;
    showEditIcon: Schema.Attribute.Boolean;
  };
}

export interface WidgetItemsGiftCardItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_gift_card_items';
  info: {
    description: '';
    displayName: 'GiftCardItem';
    icon: 'bolt';
  };
  attributes: {
    giftName: Schema.Attribute.String;
    giftNamePath: Schema.Attribute.String;
    identifer: Schema.Attribute.Boolean;
    subItems: Schema.Attribute.Component<'widget-items.gift-card-detail', true>;
  };
}

export interface WidgetItemsGiftFormItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_gift_form_items';
  info: {
    description: '';
    displayName: 'GiftFormItem';
    icon: 'dice';
  };
  attributes: {
    ProceedButtonPath: Schema.Attribute.String;
    proceedText: Schema.Attribute.String;
    Text: Schema.Attribute.String;
  };
}

export interface WidgetItemsGridCarouselItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_grid_carousel_items';
  info: {
    description: '';
    displayName: 'GridCarouselItem';
    icon: 'cloud-meatball';
  };
  attributes: {
    imageUrl: Schema.Attribute.String;
    isNewTab: Schema.Attribute.Boolean;
    Item_name: Schema.Attribute.String;
    Item_type: Schema.Attribute.Enumeration<
      ['product', 'offer', 'promotion', 'banner', 'category', 'brand']
    >;
    mobileTitle: Schema.Attribute.String;
    offerBackground: Schema.Attribute.String;
    path: Schema.Attribute.String;
    subText: Schema.Attribute.String;
    subTextColor: Schema.Attribute.String;
    text: Schema.Attribute.String;
    textColor: Schema.Attribute.String;
    videoUrl: Schema.Attribute.String;
  };
}

export interface WidgetItemsHeaderItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_header_items';
  info: {
    description: '';
    displayName: 'HeaderItem';
    icon: 'list-ul';
  };
  attributes: {
    isNavigateToPLP: Schema.Attribute.Boolean;
    isNewTab: Schema.Attribute.Boolean;
    mobileIconUrl: Schema.Attribute.String;
    mobileText: Schema.Attribute.String;
    subItems: Schema.Attribute.Component<'widget-items.advice-items', true>;
    text: Schema.Attribute.String;
    webUrl: Schema.Attribute.String;
  };
}

export interface WidgetItemsHeaderTopItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_header_top_items';
  info: {
    description: '';
    displayName: 'HeaderTopItem';
    icon: 'book-open';
  };
  attributes: {
    iconPath: Schema.Attribute.String;
    iconText: Schema.Attribute.String;
    iconUrl: Schema.Attribute.String;
    identifier: Schema.Attribute.String;
    path: Schema.Attribute.String;
  };
}

export interface WidgetItemsHeroBannerItems extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_hero_banner_items';
  info: {
    description: '';
    displayName: 'HeroBannerItems';
    icon: 'align-left';
  };
  attributes: {
    altText: Schema.Attribute.String;
    componentName: Schema.Attribute.String;
    creative_name: Schema.Attribute.String;
    creative_slot: Schema.Attribute.String;
    imageName: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    imageUrlMobile: Schema.Attribute.String;
    isNewTab: Schema.Attribute.Boolean;
    Item_name: Schema.Attribute.String;
    Item_type: Schema.Attribute.Enumeration<
      ['product', 'offer', 'promotion', 'banner', 'category', 'brand']
    >;
    path: Schema.Attribute.String;
  };
}

export interface WidgetItemsIconContentItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_icon_content_items';
  info: {
    displayName: 'IconContentItem';
    icon: 'bowling-ball';
  };
  attributes: {
    icon: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface WidgetItemsLipstickShadeItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_lipstick_shade_items';
  info: {
    displayName: 'LipstickShadeItem';
    icon: 'cat';
  };
  attributes: {
    buttonResults: Schema.Attribute.String;
    buttonResultsPath: Schema.Attribute.String;
    path: Schema.Attribute.String;
    quizPath: Schema.Attribute.String;
    quizText: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface WidgetItemsLogoTextItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_logo_text_items';
  info: {
    description: '';
    displayName: 'BenefitsItem';
    icon: 'bars';
  };
  attributes: {
    imageUrl: Schema.Attribute.String;
    subText: Schema.Attribute.String;
    text: Schema.Attribute.String;
    textColor: Schema.Attribute.String;
  };
}

export interface WidgetItemsLookPosition extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_look_positions';
  info: {
    description: '';
    displayName: 'LookPosition';
    icon: 'business-time';
  };
  attributes: {
    key: Schema.Attribute.String;
    left: Schema.Attribute.String;
    mobileLeftPosition: Schema.Attribute.String;
    mobileTopPosition: Schema.Attribute.String;
    path: Schema.Attribute.String;
    products: Schema.Attribute.RichText;
    tooltipMsg: Schema.Attribute.String;
    tooltipPlacement: Schema.Attribute.String;
    top: Schema.Attribute.String;
  };
}

export interface WidgetItemsLoyalityTierDetail extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_loyality_tier_details';
  info: {
    description: '';
    displayName: 'LoyalityTierDetail';
    icon: 'arrow-circle-up';
  };
  attributes: {
    icon: Schema.Attribute.String;
    icon_png: Schema.Attribute.String;
    name: Schema.Attribute.String;
    tier: Schema.Attribute.Enumeration<['tier1', 'tier2', 'tier3', 'tier4']>;
  };
}

export interface WidgetItemsMultiShowCaseItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_multi_show_case_items';
  info: {
    description: '';
    displayName: 'MultiShowCaseItem';
    icon: 'list-ol';
  };
  attributes: {
    imageUrl: Schema.Attribute.String;
    imgUrlMobile: Schema.Attribute.String;
    isNewTab: Schema.Attribute.Boolean;
    Item_name: Schema.Attribute.String;
    Item_type: Schema.Attribute.Enumeration<
      ['product', 'offer', 'promotion', 'banner', 'category', 'brand']
    >;
    path: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface WidgetItemsNestedItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_nested_items';
  info: {
    description: '';
    displayName: 'NestedItem';
    icon: 'envelope-open';
  };
  attributes: {
    group: Schema.Attribute.String;
    info: Schema.Attribute.RichText;
    subCategories: Schema.Attribute.Component<
      'widget-items.nested-sub-item',
      true
    >;
    subText: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface WidgetItemsNestedSubItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_nested_sub_items';
  info: {
    description: '';
    displayName: 'NestedSubItem';
    icon: 'clone';
  };
  attributes: {
    info: Schema.Attribute.RichText;
    path: Schema.Attribute.String;
    subText: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface WidgetItemsOfferGridDataItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_offer_grid_data_items';
  info: {
    displayName: 'OfferGridDataItem';
    icon: 'bowling-ball';
  };
  attributes: {
    boxSubText: Schema.Attribute.String;
    boxText: Schema.Attribute.String;
    imgPath: Schema.Attribute.String;
    imgUrl: Schema.Attribute.String;
    imgUrlMobile: Schema.Attribute.String;
    stripMargin: Schema.Attribute.String;
    stripPadding: Schema.Attribute.String;
    stripText: Schema.Attribute.String;
  };
}

export interface WidgetItemsOfferGridTextItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_offer_grid_text_items';
  info: {
    displayName: 'OfferGridTextItem';
    icon: 'cart-plus';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    descriptionColor: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    imageUrlMobile: Schema.Attribute.String;
    isNewTab: Schema.Attribute.Boolean;
    MobiletileTextPaddingHorizontal: Schema.Attribute.String;
    MobiletileTextPaddingVertical: Schema.Attribute.String;
    path: Schema.Attribute.String;
    tileSubText: Schema.Attribute.String;
    tileSubTextColor: Schema.Attribute.String;
    tileText: Schema.Attribute.String;
    tileTextBackground: Schema.Attribute.String;
    tileTextColor: Schema.Attribute.String;
    WebtileTextPaddingHorizontal: Schema.Attribute.String;
    WebtileTextPaddingVertical: Schema.Attribute.String;
  };
}

export interface WidgetItemsOffersGridItems extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_offers_grid_items';
  info: {
    description: '';
    displayName: 'OffersGridItems';
    icon: 'adjust';
  };
  attributes: {
    flipImageUrl: Schema.Attribute.String;
    flipMobileImageUrl: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    isFlipActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isNewTab: Schema.Attribute.Boolean;
    Item_name: Schema.Attribute.String;
    Item_type: Schema.Attribute.Enumeration<
      ['product', 'offer', 'promotion', 'banner', 'category', 'brand']
    >;
    MobiletextPaddingX: Schema.Attribute.String;
    MobiletextPaddingY: Schema.Attribute.String;
    offerBackground: Schema.Attribute.String;
    padding: Schema.Attribute.String;
    path: Schema.Attribute.String;
    subText: Schema.Attribute.String;
    subTextColor: Schema.Attribute.String;
    text: Schema.Attribute.String;
    textColor: Schema.Attribute.String;
    WebtextPaddingX: Schema.Attribute.String;
    WebtextPaddingY: Schema.Attribute.String;
  };
}

export interface WidgetItemsPopulrBrandsItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_populr_brands_items';
  info: {
    description: '';
    displayName: 'populrBrandsItem';
  };
  attributes: {
    imageUrl: Schema.Attribute.String;
    isNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    mobileImageUrl: Schema.Attribute.String;
    path: Schema.Attribute.String;
  };
}

export interface WidgetItemsProductCarouselList extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_product_carousel_lists';
  info: {
    description: '';
    displayName: 'ProductCarouselList';
  };
  attributes: {
    backgroundImage: Schema.Attribute.String;
    field: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      ['exact', 'not-exact', 'Ite', 'It', 'gte', 'gt', 'range', 'contains']
    >;
    value: Schema.Attribute.RichText;
  };
}

export interface WidgetItemsProductDetailItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_product_detail_items';
  info: {
    displayName: 'ProductDetailItem';
    icon: 'address-card';
  };
  attributes: {
    icon: Schema.Attribute.String;
    iconText: Schema.Attribute.String;
  };
}

export interface WidgetItemsProductListingItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_product_listing_items';
  info: {
    description: '';
    displayName: 'ProductListingItem';
    icon: 'chalkboard';
  };
  attributes: {
    buttonPath: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    position: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface WidgetItemsProductPopTextItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_product_pop_text_items';
  info: {
    displayName: 'ProductPopTextItem';
    icon: 'align-justify';
  };
  attributes: {
    buttonBackgroundColor: Schema.Attribute.String;
    buttonColor: Schema.Attribute.String;
    buttonPath: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface WidgetItemsProfileItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_profile_items';
  info: {
    description: '';
    displayName: 'ProfileItem';
    icon: 'at';
  };
  attributes: {
    backgroundImg: Schema.Attribute.String;
    backgroundImgMobile: Schema.Attribute.String;
    buttonPath: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    code: Schema.Attribute.String;
    pickedText: Schema.Attribute.String;
    secondButtonPath: Schema.Attribute.String;
    secondButtonText: Schema.Attribute.String;
    subCategories: Schema.Attribute.Component<
      'widget-items.profile-sub-item',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface WidgetItemsProfileSubItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_profile_sub_items';
  info: {
    description: '';
    displayName: 'ProfileSubItem';
    icon: 'chess-king';
  };
  attributes: {
    border: Schema.Attribute.String;
    borderColor: Schema.Attribute.String;
    code: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    imageUrlMobile: Schema.Attribute.String;
    subText: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface WidgetItemsQuickLinksItems extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_quick_links_items';
  info: {
    description: '';
    displayName: 'QuickLinksItems';
    icon: 'sitemap';
  };
  attributes: {
    imageUrl: Schema.Attribute.String;
    isNewTab: Schema.Attribute.Boolean;
    Item_name: Schema.Attribute.String;
    Item_type: Schema.Attribute.Enumeration<
      ['product', 'offer', 'promotion', 'banner', 'category', 'brand']
    >;
    path: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface WidgetItemsSavedPaymentItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_saved_payment_items';
  info: {
    displayName: 'SavedPaymentItem';
    icon: 'house-damage';
  };
  attributes: {
    subCategories: Schema.Attribute.Component<
      'widget-items.saved-payment-sub-item',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface WidgetItemsSavedPaymentSubItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_saved_payment_sub_items';
  info: {
    displayName: 'SavedPaymentSubItem';
    icon: 'check-circle';
  };
  attributes: {
    buttonPath: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    errorMessage: Schema.Attribute.String;
    imgUrl: Schema.Attribute.String;
  };
}

export interface WidgetItemsShopByCollectionItem
  extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_shop_by_collection_items';
  info: {
    description: '';
    displayName: 'ShopByCollectionItems';
    icon: 'address-book';
  };
  attributes: {
    creative_name: Schema.Attribute.String;
    creative_slot: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    Item_name: Schema.Attribute.String;
    Item_type: Schema.Attribute.Enumeration<
      ['product', 'offer', 'promotion', 'banner', 'category', 'brand']
    >;
    path: Schema.Attribute.String;
    text: Schema.Attribute.String;
    textColor: Schema.Attribute.String;
    textHoverBG: Schema.Attribute.String;
  };
}

export interface WidgetItemsShopByLuxuryItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_shop_by_luxury_items';
  info: {
    description: '';
    displayName: 'ShopByLuxuryItem';
    icon: 'cheese';
  };
  attributes: {
    border: Schema.Attribute.String;
    creative_name: Schema.Attribute.String;
    creative_slot: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    isNewTab: Schema.Attribute.Boolean;
    path: Schema.Attribute.String;
    text: Schema.Attribute.String;
    textBgColor: Schema.Attribute.String;
  };
}

export interface WidgetItemsShopLookItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_shop_look_items';
  info: {
    description: '';
    displayName: 'ShopLookItem';
    icon: 'boxes';
  };
  attributes: {
    circleImage: Schema.Attribute.String;
    identifier: Schema.Attribute.Boolean;
    imageUrl: Schema.Attribute.String;
    mobileImageUrl: Schema.Attribute.String;
    number: Schema.Attribute.String;
    plusImage: Schema.Attribute.String;
    products: Schema.Attribute.JSON;
    subItems: Schema.Attribute.Component<'widget-items.look-position', true>;
  };
}

export interface WidgetItemsShowCaseItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_show_case_items';
  info: {
    description: '';
    displayName: 'ShowCaseItem';
    icon: 'list';
  };
  attributes: {
    imageUrl: Schema.Attribute.String;
    imageUrlMobile: Schema.Attribute.String;
    Item_name: Schema.Attribute.String;
    Item_type: Schema.Attribute.Enumeration<
      ['product', 'offer', 'promotion', 'banner', 'category', 'brand']
    >;
    path: Schema.Attribute.String;
    subText: Schema.Attribute.String;
    text: Schema.Attribute.String;
    textColor: Schema.Attribute.String;
  };
}

export interface WidgetItemsStepperBItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_stepper_b_items';
  info: {
    description: '';
    displayName: 'StepperBItem';
    icon: 'box';
  };
  attributes: {
    bgImageUrl: Schema.Attribute.String;
    bgImageUrlMobile: Schema.Attribute.String;
    btnBgColor: Schema.Attribute.String;
    btnTextColor: Schema.Attribute.String;
    buttonPath: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    quizPath: Schema.Attribute.String;
    quizText: Schema.Attribute.String;
    subItems: Schema.Attribute.Component<'widget-items.stepper-s-item', true>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    titleTextColor: Schema.Attribute.String;
  };
}

export interface WidgetItemsStepperCategory extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_stepper_categories';
  info: {
    description: '';
    displayName: 'StepperCategory';
    icon: 'cheese';
  };
  attributes: {
    bgImageUrl: Schema.Attribute.String;
    bgImageUrlMobile: Schema.Attribute.String;
    subCategories: Schema.Attribute.Component<
      'widget-items.stepper-item',
      true
    >;
    title: Schema.Attribute.String;
    titleNo: Schema.Attribute.String;
  };
}

export interface WidgetItemsStepperItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_stepper_items';
  info: {
    description: '';
    displayName: 'StepperItem';
    icon: 'cannabis';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    imageUrlMobile: Schema.Attribute.String;
    text: Schema.Attribute.String;
    textColor: Schema.Attribute.String;
  };
}

export interface WidgetItemsStepperSItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_stepper_s_items';
  info: {
    displayName: 'StepperSItem';
    icon: 'bowling-ball';
  };
  attributes: {
    categoryId: Schema.Attribute.String;
    text: Schema.Attribute.String;
    textPath: Schema.Attribute.String;
  };
}

export interface WidgetItemsTabsComponentItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_tabs_component_items';
  info: {
    description: '';
    displayName: 'TabsComponentItem';
    icon: 'arrow-right';
  };
  attributes: {
    isTabActive: Schema.Attribute.Boolean;
    text: Schema.Attribute.String;
    textbgColor: Schema.Attribute.String;
    textColor: Schema.Attribute.String;
    textPath: Schema.Attribute.String;
  };
}

export interface WidgetItemsTopBrandsItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_top_brands_items';
  info: {
    description: '';
    displayName: 'TopBrandsItem';
    icon: 'bowling-ball';
  };
  attributes: {
    imgPath: Schema.Attribute.String;
    imgUrl: Schema.Attribute.String;
    imgUrlMobile: Schema.Attribute.String;
  };
}

export interface WidgetItemsWalletAdvantagesItem
  extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_wallet_advantages_items';
  info: {
    description: '';
    displayName: 'WalletAdvantagesItem';
    icon: 'comments-dollar';
  };
  attributes: {
    icon: Schema.Attribute.String;
    iconPath: Schema.Attribute.String;
    text: Schema.Attribute.String;
    textPath: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      ['CUSTOMER', 'CREDIT', 'PROMOTION', 'CASH']
    >;
  };
}

export interface WidgetItemsWhyConsultantItem extends Struct.ComponentSchema {
  collectionName: 'components_widget_items_why_consultant_items';
  info: {
    description: '';
    displayName: 'WhyConsultantItem';
    icon: 'capsules';
  };
  attributes: {
    icon: Schema.Attribute.String;
    iconText: Schema.Attribute.String;
    mobileIcon: Schema.Attribute.String;
  };
}

export interface WidgetAccordion extends Struct.ComponentSchema {
  collectionName: 'components_widget_accordions';
  info: {
    description: '';
    displayName: 'Accordion';
    icon: 'comments';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    items: Schema.Attribute.Component<'widget-items.accordion-item', true>;
    title: Schema.Attribute.String;
    titlePath: Schema.Attribute.String;
  };
}

export interface WidgetAppHorizontalSpacer extends Struct.ComponentSchema {
  collectionName: 'components_widget_app_horizontal_spacers';
  info: {
    description: '';
    displayName: 'AppHorizontalSpacer';
    icon: 'chess-board';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    componentName: Schema.Attribute.String;
    display: Schema.Attribute.Enumeration<['Desktop', 'App', 'Msite']>;
    height: Schema.Attribute.String;
  };
}

export interface WidgetAppIcons extends Struct.ComponentSchema {
  collectionName: 'components_widget_app_icons';
  info: {
    displayName: 'appIcons';
    icon: 'building';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    items: Schema.Attribute.Component<'widget-items.app-icon-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface WidgetBeautyProfile extends Struct.ComponentSchema {
  collectionName: 'components_widget_beauty_profiles';
  info: {
    description: '';
    displayName: 'BeautyProfile';
    icon: 'dumpster';
  };
  attributes: {
    bgImageUrl: Schema.Attribute.String;
    bgImageUrlMobile: Schema.Attribute.String;
    buttonPath: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    categories: Schema.Attribute.Component<'widget-items.profile-item', true>;
    subText: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface WidgetBeautyStop extends Struct.ComponentSchema {
  collectionName: 'components_widget_beauty_stops';
  info: {
    description: '';
    displayName: 'BeautyStop';
    icon: 'book-reader';
  };
  attributes: {
    beautyButton: Schema.Attribute.String;
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    buttonPath: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    cardDescription: Schema.Attribute.String;
    cardTitle: Schema.Attribute.String;
    contentType: Schema.Attribute.String;
    display: Schema.Attribute.Enumeration<['web', 'mobile']>;
    flag: Schema.Attribute.Boolean;
    imageUrl: Schema.Attribute.String;
    items: Schema.Attribute.Component<'widget-items.beauty-stop-item', true>;
    shareIcon: Schema.Attribute.String;
    shareText: Schema.Attribute.String;
    showSubText: Schema.Attribute.Boolean;
    subText: Schema.Attribute.String;
    title: Schema.Attribute.String;
    viewIcon: Schema.Attribute.String;
    viewMore: Schema.Attribute.String;
    views: Schema.Attribute.String;
    ViewsText: Schema.Attribute.String;
    visibility: Schema.Attribute.Enumeration<['all', 'web', 'app', 'hidden']> &
      Schema.Attribute.DefaultTo<'all'>;
  };
}

export interface WidgetBenefits extends Struct.ComponentSchema {
  collectionName: 'components_widget_benefits';
  info: {
    description: '';
    displayName: 'Benefits';
    icon: 'band-aid';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    display: Schema.Attribute.Enumeration<['web', 'mobile']>;
    items: Schema.Attribute.Component<'widget-items.logo-text-item', true>;
    visibility: Schema.Attribute.Enumeration<['all', 'web', 'app', 'hidden']> &
      Schema.Attribute.DefaultTo<'all'>;
  };
}

export interface WidgetBookConsultantHeading extends Struct.ComponentSchema {
  collectionName: 'components_widget_book_consultant_headings';
  info: {
    description: '';
    displayName: 'BookConsultantHeading';
    icon: 'baby-carriage';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    display: Schema.Attribute.Enumeration<['web', 'mobile']>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface WidgetBottomBar extends Struct.ComponentSchema {
  collectionName: 'components_widget_bottom_bars';
  info: {
    description: '';
    displayName: 'BottomBar';
    icon: 'candy-cane';
  };
  attributes: {
    barType: Schema.Attribute.Enumeration<
      ['None', 'BottomNavigationBar', 'FilterBar', 'ProductBar', 'PaymentBar']
    >;
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    chatbotBottom: Schema.Attribute.String;
    showChatBot: Schema.Attribute.Boolean;
  };
}

export interface WidgetBottomNavigationBar extends Struct.ComponentSchema {
  collectionName: 'components_widget_bottom_navigation_bars';
  info: {
    description: '';
    displayName: 'BottomNavigationBar';
    icon: 'assistive-listening-systems';
  };
  attributes: {
    display: Schema.Attribute.Enumeration<['web', 'mobile']>;
    items: Schema.Attribute.Component<'widget-items.bottom-nav-item', true>;
  };
}

export interface WidgetBrandDescription extends Struct.ComponentSchema {
  collectionName: 'components_widget_brand_descriptions';
  info: {
    description: '';
    displayName: 'BrandDescription';
    icon: 'braille';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    ctaLabel: Schema.Attribute.String;
    ctaLabelUrl: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    imgUrl: Schema.Attribute.String;
    imgUrlMobile: Schema.Attribute.String;
    items: Schema.Attribute.Component<
      'widget-items.brand-description-item',
      true
    >;
    subTitle: Schema.Attribute.String;
    subTitleColor: Schema.Attribute.String;
    title: Schema.Attribute.String;
    titleColor: Schema.Attribute.String;
    visibility: Schema.Attribute.Enumeration<['all', 'web', 'app', 'hidden']> &
      Schema.Attribute.DefaultTo<'all'>;
  };
}

export interface WidgetBrandList extends Struct.ComponentSchema {
  collectionName: 'components_widget_brand_lists';
  info: {
    displayName: 'BrandList';
    icon: 'atom';
  };
  attributes: {
    defaultSlug: Schema.Attribute.String;
    headingText: Schema.Attribute.String;
    items: Schema.Attribute.Component<'widget-items.brand-list-items', true>;
    searchText: Schema.Attribute.String;
  };
}

export interface WidgetBrandsGrid extends Struct.ComponentSchema {
  collectionName: 'components_widget_brands_grids';
  info: {
    description: '';
    displayName: 'BrandsGrid';
    icon: 'asterisk';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgImageUrl: Schema.Attribute.String;
    bgMobileImageUrl: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    button: Schema.Attribute.String;
    buttonPath: Schema.Attribute.String;
    contentImageisNewTab: Schema.Attribute.Boolean;
    contentImagePath: Schema.Attribute.String;
    contentImageUrl: Schema.Attribute.String;
    contentImageUrlMobile: Schema.Attribute.String;
    display: Schema.Attribute.Enumeration<['web', 'mobile']>;
    items: Schema.Attribute.Component<'widget-items.brands-grid-item', true>;
    title: Schema.Attribute.String;
    visibility: Schema.Attribute.Enumeration<['all', 'web', 'app', 'hidden']> &
      Schema.Attribute.DefaultTo<'all'>;
  };
}

export interface WidgetButton extends Struct.ComponentSchema {
  collectionName: 'components_widget_buttons';
  info: {
    description: '';
    displayName: 'Button';
    icon: 'bold';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String;
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    btnPosition: Schema.Attribute.Enumeration<['left', 'center', 'right']>;
    btnText: Schema.Attribute.String;
    btnTextColor: Schema.Attribute.String;
    fontSize: Schema.Attribute.String;
    lineHeight: Schema.Attribute.String;
    mobileFontSize: Schema.Attribute.String;
    path: Schema.Attribute.String;
    visibility: Schema.Attribute.Enumeration<['all', 'web', 'app', 'hidden']> &
      Schema.Attribute.DefaultTo<'all'>;
  };
}

export interface WidgetCartHeader extends Struct.ComponentSchema {
  collectionName: 'components_widget_cart_headers';
  info: {
    displayName: 'cartHeader';
    icon: 'circle';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPaddingMobile: Schema.Attribute.String;
    bgPaddingWeb: Schema.Attribute.String;
    HeaderLogo: Schema.Attribute.String;
    imageAlt: Schema.Attribute.String;
    isCartHeader: Schema.Attribute.Boolean;
    items: Schema.Attribute.Component<'widget-items.cart-header-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface WidgetCategoryCarousel extends Struct.ComponentSchema {
  collectionName: 'components_widget_category_carousels';
  info: {
    description: '';
    displayName: 'CategoryCarousel';
    icon: 'box';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgImageUrl: Schema.Attribute.String;
    bgpadding: Schema.Attribute.String;
    componentName: Schema.Attribute.String;
    display: Schema.Attribute.Enumeration<['web', 'mobile']>;
    items: Schema.Attribute.Component<
      'widget-items.category-carousel-item',
      true
    >;
    title: Schema.Attribute.String;
    visibility: Schema.Attribute.Enumeration<['all', 'web', 'app', 'hidden']> &
      Schema.Attribute.DefaultTo<'all'>;
  };
}

export interface WidgetCategoryVideos extends Struct.ComponentSchema {
  collectionName: 'components_widget_category_videos';
  info: {
    description: '';
    displayName: 'CategoryVideos';
    icon: 'apple-alt';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    componentName: Schema.Attribute.String;
    items: Schema.Attribute.Component<
      'widget-items.category-videos-item',
      true
    >;
    title: Schema.Attribute.String;
    visibility: Schema.Attribute.Enumeration<['all', 'web', 'app', 'hidden']> &
      Schema.Attribute.DefaultTo<'all'>;
  };
}

export interface WidgetConfigurations extends Struct.ComponentSchema {
  collectionName: 'components_widget_configurations';
  info: {
    description: '';
    displayName: 'configurations';
    icon: 'campground';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPaddding: Schema.Attribute.String;
    items: Schema.Attribute.Component<'widget-items.configuration-item', false>;
    title: Schema.Attribute.String;
  };
}

export interface WidgetConsultantService extends Struct.ComponentSchema {
  collectionName: 'components_widget_consultant_services';
  info: {
    description: '';
    displayName: 'consultantService';
    icon: 'campground';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    display: Schema.Attribute.Enumeration<['web', 'mobile']>;
    items: Schema.Attribute.Component<
      'widget-items.consult-service-item',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface WidgetContactUs extends Struct.ComponentSchema {
  collectionName: 'components_widget_contactuses';
  info: {
    description: '';
    displayName: 'ContactUs';
    icon: 'phone-alt';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    caution_note: Schema.Attribute.String;
    contactDetails: Schema.Attribute.Component<
      'widget-items.contact-details',
      true
    >;
    ctaLabel: Schema.Attribute.String;
    formList: Schema.Attribute.Component<'widget-items.contact-form', true>;
    formTitle: Schema.Attribute.String;
    subText: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface WidgetEmptyComponent extends Struct.ComponentSchema {
  collectionName: 'components_widget_empty_components';
  info: {
    description: '';
    displayName: 'EmptyComponent';
    icon: 'border-style';
  };
  attributes: {
    componentName: Schema.Attribute.String;
    display: Schema.Attribute.Enumeration<['web', 'mobile']>;
    isEmptyComponent: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface WidgetEvents extends Struct.ComponentSchema {
  collectionName: 'components_widget_events';
  info: {
    description: '';
    displayName: 'Events';
    icon: 'cash-register';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    imgUrl: Schema.Attribute.String;
    items: Schema.Attribute.Component<'widget-items.events-item', true>;
    noEventSubTitle: Schema.Attribute.String;
    noEventTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface WidgetExpertAdvice extends Struct.ComponentSchema {
  collectionName: 'components_widget_expert_advices';
  info: {
    displayName: 'ExpertAdvice';
    icon: 'file';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    items: Schema.Attribute.Component<'widget-items.expert-advice-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface WidgetFcData extends Struct.ComponentSchema {
  collectionName: 'components_widget_fc_data';
  info: {
    description: '';
    displayName: 'FcData';
    icon: 'bullseye';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    fcLogo: Schema.Attribute.String;
    fcNacInnerTitle: Schema.Attribute.String;
    fcNavInnerSubTitle: Schema.Attribute.String;
    fcTierSubTitle: Schema.Attribute.String;
    fcTierTitle: Schema.Attribute.String;
    isLoggedIn: Schema.Attribute.Boolean;
    item: Schema.Attribute.Component<'widget-items.fc-tier-description', true>;
    items: Schema.Attribute.Component<'widget-items.fc-nav-item', true>;
    loginButton: Schema.Attribute.String;
    loginButtonPath: Schema.Attribute.String;
    navImgUrl: Schema.Attribute.String;
    navImgUrlMobile: Schema.Attribute.String;
    navImgUrlMobilPath: Schema.Attribute.String;
    navImgUrlPath: Schema.Attribute.String;
    navTitle: Schema.Attribute.String;
    signUpButton: Schema.Attribute.String;
    signUpButtonPath: Schema.Attribute.String;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface WidgetFirstCitizen extends Struct.ComponentSchema {
  collectionName: 'components_widget_first_citizens';
  info: {
    displayName: 'FirstCitizen';
    icon: 'hourglass';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface WidgetFooter extends Struct.ComponentSchema {
  collectionName: 'components_widget_footers';
  info: {
    description: '';
    displayName: 'Footer';
    icon: 'list-alt';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    items: Schema.Attribute.Component<'widget-items.footer-item', true>;
  };
}

export interface WidgetFooterBottom extends Struct.ComponentSchema {
  collectionName: 'components_widget_footer_bottoms';
  info: {
    description: '';
    displayName: 'FooterBottom';
    icon: 'baseball-ball';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    display: Schema.Attribute.Enumeration<['web', 'mobile']>;
    title: Schema.Attribute.String;
  };
}

export interface WidgetFooterCopyRights extends Struct.ComponentSchema {
  collectionName: 'components_widget_footer_copy_rights';
  info: {
    description: '';
    displayName: 'FooterCopyRights';
    icon: 'atom';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    items: Schema.Attribute.Component<
      'widget-items.footer-copy-right-item',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface WidgetFooterPayment extends Struct.ComponentSchema {
  collectionName: 'components_widget_footer_payments';
  info: {
    description: '';
    displayName: 'FooterPayment';
    icon: 'baby-carriage';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    display: Schema.Attribute.Enumeration<['web', 'mobile']>;
    items: Schema.Attribute.Component<'widget-items.footer-payment-item', true>;
    visibility: Schema.Attribute.Enumeration<['all', 'web', 'app', 'hidden']> &
      Schema.Attribute.DefaultTo<'all'>;
  };
}

export interface WidgetFooterSubscribe extends Struct.ComponentSchema {
  collectionName: 'components_widget_footer_subscribes';
  info: {
    description: '';
    displayName: 'FooterSubscribe';
    icon: 'satellite-dish';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    ctaLabel: Schema.Attribute.String;
    display: Schema.Attribute.Enumeration<['web', 'mobile']>;
    facebookIconPath: Schema.Attribute.String;
    facebookIconUrl: Schema.Attribute.String;
    instagramIconPath: Schema.Attribute.String;
    instagramIconUrl: Schema.Attribute.String;
    subscribeText: Schema.Attribute.String;
    twitterIconPath: Schema.Attribute.String;
    twitterIconUrl: Schema.Attribute.String;
    visibility: Schema.Attribute.Enumeration<['all', 'web', 'app', 'hidden']> &
      Schema.Attribute.DefaultTo<'all'>;
  };
}

export interface WidgetGetTheApp extends Struct.ComponentSchema {
  collectionName: 'components_widget_get_the_apps';
  info: {
    description: '';
    displayName: 'GetTheApp';
    icon: 'bread-slice';
  };
  attributes: {
    altText: Schema.Attribute.String;
    appStoreImageUrl: Schema.Attribute.String;
    appStoreImageUrlMobile: Schema.Attribute.String;
    appStoreImgPath: Schema.Attribute.String;
    availableOn: Schema.Attribute.String;
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    componentName: Schema.Attribute.String;
    ctaLabel: Schema.Attribute.String;
    downloadText: Schema.Attribute.String;
    items: Schema.Attribute.Component<'widget-items.get-the-app-item', true>;
    path: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
    playStoreImgPath: Schema.Attribute.String;
    playStoreimgUrl: Schema.Attribute.String;
    playStoreImgUrlMobile: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface WidgetGiftCardStore extends Struct.ComponentSchema {
  collectionName: 'components_widget_gift_card_stores';
  info: {
    description: '';
    displayName: 'GiftCardStore';
    icon: 'cheese';
  };
  attributes: {
    amountList: Schema.Attribute.Component<'widget-items.gift-form-item', true>;
    amountTitle: Schema.Attribute.String;
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    buttonPath: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    formList: Schema.Attribute.Component<'widget-items.gift-form-item', true>;
    formTitle: Schema.Attribute.String;
    items: Schema.Attribute.Component<'widget-items.gift-card-item', true>;
    pleaseNoteText: Schema.Attribute.RichText;
    previewInnerSubText: Schema.Attribute.String;
    previewInnerTitle: Schema.Attribute.String;
    previewLogoUrl: Schema.Attribute.String;
    previewLogoUrlPath: Schema.Attribute.String;
    previewTitle: Schema.Attribute.String;
    senderBottomText: Schema.Attribute.String;
    senderList: Schema.Attribute.Component<'widget-items.gift-form-item', true>;
    senderTitle: Schema.Attribute.String;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface WidgetGridCarousel extends Struct.ComponentSchema {
  collectionName: 'components_widget_grid_carousels';
  info: {
    description: '';
    displayName: 'GridCarousel';
    icon: 'dice-two';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    carouselDots: Schema.Attribute.Boolean;
    desktopColumns: Schema.Attribute.String;
    display: Schema.Attribute.Enumeration<['web', 'mobile']>;
    isBgColor: Schema.Attribute.String;
    itemBackgroundSpacing: Schema.Attribute.String;
    itemPaddingBottom: Schema.Attribute.String;
    itemPaddingX: Schema.Attribute.String;
    items: Schema.Attribute.Component<'widget-items.grid-carousel-item', true>;
    marginLeft: Schema.Attribute.String;
    mobileColumns: Schema.Attribute.String;
    showGradient: Schema.Attribute.Boolean;
    showTextOnHover: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
    titleColor: Schema.Attribute.String;
    topViewMore: Schema.Attribute.Boolean;
    viewMore: Schema.Attribute.String;
    viewMoreLink: Schema.Attribute.String;
    visibility: Schema.Attribute.Enumeration<['all', 'web', 'app', 'hidden']> &
      Schema.Attribute.DefaultTo<'all'>;
  };
}

export interface WidgetHeader extends Struct.ComponentSchema {
  collectionName: 'components_widget_headers';
  info: {
    description: '';
    displayName: 'Header';
    icon: 'kaaba';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    cartIconPath: Schema.Attribute.String;
    cartIconUrl: Schema.Attribute.String;
    crossIconUrl: Schema.Attribute.String;
    ctaLabel: Schema.Attribute.String;
    ctaLabelBgColor: Schema.Attribute.String;
    ctaLabelColor: Schema.Attribute.String;
    ctaLabelUrl: Schema.Attribute.String;
    display: Schema.Attribute.Enumeration<['web', 'mobile']>;
    items: Schema.Attribute.Component<'widget-items.header-item', true>;
    logoImageUrl: Schema.Attribute.String;
    logoPath: Schema.Attribute.String;
    searchIconUrl: Schema.Attribute.String;
    searchText: Schema.Attribute.String;
    signInPath: Schema.Attribute.String;
    signInText: Schema.Attribute.String;
    topIconUrl: Schema.Attribute.String;
    topItems: Schema.Attribute.Component<'widget-items.header-top-item', true>;
    userIconPath: Schema.Attribute.String;
    userIconUrl: Schema.Attribute.String;
    wishListIconUrl: Schema.Attribute.String;
    wishListPath: Schema.Attribute.String;
  };
}

export interface WidgetHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_widget_hero_banners';
  info: {
    description: '';
    displayName: 'HeroBanner';
    icon: 'align-justify';
  };
  attributes: {
    autoPlay: Schema.Attribute.Boolean;
    autoScroll: Schema.Attribute.Boolean;
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    componentName: Schema.Attribute.String;
    controlType: Schema.Attribute.String;
    display: Schema.Attribute.Enumeration<['web', 'mobile']>;
    items: Schema.Attribute.Component<'widget-items.hero-banner-items', true>;
    promotion_id: Schema.Attribute.String;
    promotion_name: Schema.Attribute.String;
    title: Schema.Attribute.String;
    visibility: Schema.Attribute.Enumeration<['all', 'web', 'app', 'hidden']> &
      Schema.Attribute.DefaultTo<'all'>;
  };
}

export interface WidgetHorizontalSpacer extends Struct.ComponentSchema {
  collectionName: 'components_widget_horizontal_spacers';
  info: {
    description: '';
    displayName: 'HorizontalSpacer';
    icon: 'archive';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    display: Schema.Attribute.Enumeration<['web', 'mobile']>;
    height: Schema.Attribute.String;
    visibility: Schema.Attribute.Enumeration<['all', 'web', 'app', 'hidden']> &
      Schema.Attribute.DefaultTo<'all'>;
  };
}

export interface WidgetImageTitle extends Struct.ComponentSchema {
  collectionName: 'components_widget_image_titles';
  info: {
    displayName: 'ImageTitle';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    imageAltText: Schema.Attribute.String;
    imageUrl: Schema.Attribute.String;
    imageUrlMobile: Schema.Attribute.String;
    isComponentDiffer: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface WidgetLipstickShader extends Struct.ComponentSchema {
  collectionName: 'components_widget_lipstick_shaders';
  info: {
    displayName: 'LipstickShader';
    icon: 'hand-holding-heart';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgImageUrl: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    buttonPath: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    items: Schema.Attribute.Component<'widget-items.lipstick-shade-item', true>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface WidgetLogo extends Struct.ComponentSchema {
  collectionName: 'components_widget_logos';
  info: {
    displayName: 'Logo';
    icon: 'cloud-meatball';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    display: Schema.Attribute.Enumeration<['left', 'center', 'right']>;
    logoImg: Schema.Attribute.String;
    logoImgMobile: Schema.Attribute.String;
  };
}

export interface WidgetLoyaltyTier extends Struct.ComponentSchema {
  collectionName: 'components_widget_loyalty_tiers';
  info: {
    displayName: 'LoyaltyTier';
    icon: 'boxes';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    componentName: Schema.Attribute.String;
    isComponent: Schema.Attribute.Boolean;
    items: Schema.Attribute.Component<
      'widget-items.loyality-tier-detail',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface WidgetMessage extends Struct.ComponentSchema {
  collectionName: 'components_widget_messages';
  info: {
    displayName: 'Message';
    icon: 'language';
  };
  attributes: {
    code: Schema.Attribute.String;
    componentName: Schema.Attribute.String;
    isComponent: Schema.Attribute.Boolean;
    message: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface WidgetMultiBanner extends Struct.ComponentSchema {
  collectionName: 'components_widget_multi_banners';
  info: {
    description: '';
    displayName: 'MultiBanner';
    icon: 'images';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    columns: Schema.Attribute.Integer;
    ctaLabel: Schema.Attribute.String;
    ctaLabelUrl: Schema.Attribute.String;
    display: Schema.Attribute.Enumeration<['web', 'mobile']>;
    items: Schema.Attribute.Component<'widget-items.hero-banner-items', true>;
    title: Schema.Attribute.String;
    visibility: Schema.Attribute.Enumeration<['all', 'web', 'app', 'hidden']> &
      Schema.Attribute.DefaultTo<'all'>;
  };
}

export interface WidgetMultiShowCase extends Struct.ComponentSchema {
  collectionName: 'components_widget_multi_show_cases';
  info: {
    description: '';
    displayName: 'MultiShowCase';
    icon: 'audio-description';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    contentImageUrl: Schema.Attribute.String;
    contentImageUrlMobile: Schema.Attribute.String;
    contentLeft: Schema.Attribute.Boolean;
    display: Schema.Attribute.Enumeration<['web', 'mobile']>;
    items: Schema.Attribute.Component<
      'widget-items.multi-show-case-item',
      true
    >;
    path: Schema.Attribute.String;
    title: Schema.Attribute.String;
    visibility: Schema.Attribute.Enumeration<['all', 'web', 'app', 'hidden']> &
      Schema.Attribute.DefaultTo<'all'>;
    zigzag: Schema.Attribute.Boolean;
  };
}

export interface WidgetNestedChild extends Struct.ComponentSchema {
  collectionName: 'components_widget_nested_children';
  info: {
    description: '';
    displayName: 'NestedChild';
    icon: 'door-closed';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    bottomText: Schema.Attribute.String;
    categories: Schema.Attribute.Component<'widget-items.nested-item', true>;
    subText: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface WidgetNoStores extends Struct.ComponentSchema {
  collectionName: 'components_widget_no_stores';
  info: {
    displayName: 'NoStores';
    icon: 'bold';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    imgUrl: Schema.Attribute.String;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface WidgetOfferGridData extends Struct.ComponentSchema {
  collectionName: 'components_widget_offer_grid_data';
  info: {
    displayName: 'OfferGridData';
    icon: 'cheese';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    isCenterText: Schema.Attribute.Boolean;
    items: Schema.Attribute.Component<
      'widget-items.offer-grid-data-item',
      true
    >;
    margin: Schema.Attribute.String;
    padding: Schema.Attribute.String;
    title: Schema.Attribute.String;
    viewMore: Schema.Attribute.String;
    viewMoreLink: Schema.Attribute.String;
  };
}

export interface WidgetOfferGridText extends Struct.ComponentSchema {
  collectionName: 'components_widget_offer_grid_texts';
  info: {
    displayName: 'OfferGridText';
    icon: 'church';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    desktopColumns: Schema.Attribute.String;
    display: Schema.Attribute.Boolean;
    isBgColor: Schema.Attribute.Boolean;
    itemPaddingBottom: Schema.Attribute.String;
    itemPaddingBottomMobile: Schema.Attribute.String;
    itemPaddingHorizontal: Schema.Attribute.String;
    itempaddingXMobile: Schema.Attribute.String;
    items: Schema.Attribute.Component<
      'widget-items.offer-grid-text-item',
      true
    >;
    marginLeft: Schema.Attribute.String;
    mobileColumns: Schema.Attribute.String;
    MobiletileTextPaddingHorizontal: Schema.Attribute.String;
    MobiletileTextPaddingVertical: Schema.Attribute.String;
    showGradient: Schema.Attribute.Boolean;
    tileSpacing: Schema.Attribute.String;
    title: Schema.Attribute.String;
    titleColor: Schema.Attribute.String;
    WebtileTextPaddingHorizontal: Schema.Attribute.String;
    WebtileTextPaddingVertical: Schema.Attribute.String;
  };
}

export interface WidgetOffersGrid extends Struct.ComponentSchema {
  collectionName: 'components_widget_offers_grids';
  info: {
    description: '';
    displayName: 'OffersGrid';
    icon: 'ad';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    cardBorder: Schema.Attribute.Boolean;
    desktopColumns: Schema.Attribute.Integer;
    disableGenericBottomSpace: Schema.Attribute.Boolean;
    display: Schema.Attribute.Enumeration<['web', 'mobile']>;
    isBgColor: Schema.Attribute.String;
    isCenterText: Schema.Attribute.Boolean;
    itemBackgroundSpacing: Schema.Attribute.String;
    itemPaddingBottom: Schema.Attribute.String;
    itemPaddingBottomMobile: Schema.Attribute.String;
    itemPaddingX: Schema.Attribute.String;
    itempaddingXMobile: Schema.Attribute.String;
    items: Schema.Attribute.Component<'widget-items.offers-grid-items', true>;
    marginLeft: Schema.Attribute.String;
    mobileColumns: Schema.Attribute.String;
    mobileItems: Schema.Attribute.Component<
      'widget-items.offers-grid-items',
      true
    >;
    mobileMargin: Schema.Attribute.String;
    MobiletextPaddingX: Schema.Attribute.String;
    MobiletextPaddingY: Schema.Attribute.String;
    showGradient: Schema.Attribute.Boolean;
    showTextOnHover: Schema.Attribute.Boolean;
    showTileOnImage: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
    titleColor: Schema.Attribute.String;
    viewMore: Schema.Attribute.String;
    viewMoreLink: Schema.Attribute.String;
    viewMoreMobile: Schema.Attribute.Boolean;
    viewMoreWeb: Schema.Attribute.Boolean;
    visibility: Schema.Attribute.Enumeration<['all', 'web', 'app', 'hidden']> &
      Schema.Attribute.DefaultTo<'all'>;
    WebtextPaddingX: Schema.Attribute.String;
    WebtextPaddingY: Schema.Attribute.String;
  };
}

export interface WidgetOrders extends Struct.ComponentSchema {
  collectionName: 'components_widget_orders';
  info: {
    displayName: 'Orders';
    icon: 'chess-knight';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface WidgetPopularBrands extends Struct.ComponentSchema {
  collectionName: 'components_widget_popular_brands';
  info: {
    displayName: 'popularBrands';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    items: Schema.Attribute.Component<'widget-items.populr-brands-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface WidgetProductBar extends Struct.ComponentSchema {
  collectionName: 'components_widget_product_bars';
  info: {
    displayName: 'ProductBar';
    icon: 'hospital-symbol';
  };
  attributes: {
    addToCartBackground: Schema.Attribute.String;
    addToCartText: Schema.Attribute.String;
    addToCartTextColor: Schema.Attribute.String;
    buyNowBackground: Schema.Attribute.String;
    buyNowText: Schema.Attribute.String;
    buyNowTextColor: Schema.Attribute.String;
    componentName: Schema.Attribute.String;
    goToBagBackground: Schema.Attribute.String;
    goToBagText: Schema.Attribute.String;
    gotoBagTextColor: Schema.Attribute.String;
    isComponent: Schema.Attribute.Boolean;
    notifyMeBackground: Schema.Attribute.String;
    notifyMeText: Schema.Attribute.String;
    notifyMeTextColor: Schema.Attribute.String;
    outOfStockBackground: Schema.Attribute.String;
    outOfStockText: Schema.Attribute.String;
    outOfStockTextColor: Schema.Attribute.String;
    viewCartBackground: Schema.Attribute.String;
    viewCartText: Schema.Attribute.String;
    viewCartTextColor: Schema.Attribute.String;
  };
}

export interface WidgetProductListing extends Struct.ComponentSchema {
  collectionName: 'components_widget_product_listings';
  info: {
    description: '';
    displayName: 'ProductListing';
    icon: 'drum-steelpan';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    componentName: Schema.Attribute.String;
    isVirtualCategory: Schema.Attribute.Boolean;
    items: Schema.Attribute.Component<
      'widget-items.product-listing-item',
      true
    >;
    productsVC: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
    visibility: Schema.Attribute.Enumeration<['all', 'web', 'app', 'hidden']> &
      Schema.Attribute.DefaultTo<'all'>;
  };
}

export interface WidgetProductRecommendation extends Struct.ComponentSchema {
  collectionName: 'components_widget_product_recommendations';
  info: {
    description: '';
    displayName: 'ProductRecommendation';
    icon: 'copy';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgImageUrl: Schema.Attribute.String;
    bgImageUrlMobile: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    componentName: Schema.Attribute.String;
    event: Schema.Attribute.Enumeration<['product-views']>;
    isRecommended: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface WidgetProductsCarousel extends Struct.ComponentSchema {
  collectionName: 'components_widget_products_carousels';
  info: {
    description: '';
    displayName: 'ProductsCarousel';
    icon: 'apple-alt';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    columns: Schema.Attribute.String;
    componentName: Schema.Attribute.String;
    display: Schema.Attribute.Enumeration<['web', 'mobile']>;
    isTextHover: Schema.Attribute.Boolean;
    itemBackgroundSpacing: Schema.Attribute.String;
    showGradient: Schema.Attribute.String;
    showTextOnHover: Schema.Attribute.String;
    title: Schema.Attribute.String;
    viewMore: Schema.Attribute.String;
    viewMoreLink: Schema.Attribute.String;
    visibility: Schema.Attribute.Enumeration<['all', 'web', 'app', 'hidden']> &
      Schema.Attribute.DefaultTo<'all'>;
  };
}

export interface WidgetProductsGrid extends Struct.ComponentSchema {
  collectionName: 'components_widget_products_grids';
  info: {
    description: '';
    displayName: 'ProductsGrid';
    icon: 'bookmark';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    componentName: Schema.Attribute.String;
    isproduct: Schema.Attribute.Boolean;
    isVirtualCategory: Schema.Attribute.Boolean;
    productsVC: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
    visibility: Schema.Attribute.Enumeration<['all', 'web', 'app', 'hidden']> &
      Schema.Attribute.DefaultTo<'all'>;
  };
}

export interface WidgetProfile extends Struct.ComponentSchema {
  collectionName: 'components_widget_profiles';
  info: {
    displayName: 'Profile';
    icon: 'grin-squint';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface WidgetQuickLinks extends Struct.ComponentSchema {
  collectionName: 'components_widget_quick_links';
  info: {
    description: '';
    displayName: 'QuickLinks';
    icon: 'link';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    display: Schema.Attribute.Enumeration<['web', 'mobile']>;
    items: Schema.Attribute.Component<'widget-items.quick-links-items', true>;
    mobileItems: Schema.Attribute.Component<
      'widget-items.quick-links-items',
      true
    >;
    title: Schema.Attribute.String;
    visibility: Schema.Attribute.Enumeration<['all', 'web', 'app', 'hidden']> &
      Schema.Attribute.DefaultTo<'all'>;
  };
}

export interface WidgetRichText extends Struct.ComponentSchema {
  collectionName: 'components_widget_rich_texts';
  info: {
    description: '';
    displayName: 'RichText';
    icon: 'grin-tongue';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    buttonPath: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.String;
    display: Schema.Attribute.Enumeration<['web', 'mobile']>;
    page: Schema.Attribute.RichText;
    showButton: Schema.Attribute.Boolean;
    textColor: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface WidgetSavedPaymentEmpty extends Struct.ComponentSchema {
  collectionName: 'components_widget_saved_payment_empties';
  info: {
    displayName: 'SavedPaymentEmpty';
    icon: 'box';
  };
  attributes: {
    description: Schema.Attribute.String;
    isComponent: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface WidgetSavedPayments extends Struct.ComponentSchema {
  collectionName: 'components_widget_saved_payments';
  info: {
    description: '';
    displayName: 'SavedPayments';
    icon: 'network-wired';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    categories: Schema.Attribute.Component<
      'widget-items.saved-payment-item',
      true
    >;
  };
}

export interface WidgetShopByCollection extends Struct.ComponentSchema {
  collectionName: 'components_widget_shop_by_collections';
  info: {
    description: '';
    displayName: 'ShopByCollection';
    icon: 'address-card';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    display: Schema.Attribute.Enumeration<['web', 'mobile']>;
    isTextHover: Schema.Attribute.Boolean;
    items: Schema.Attribute.Component<
      'widget-items.shop-by-collection-item',
      true
    >;
    promotion_id: Schema.Attribute.String;
    promotion_name: Schema.Attribute.String;
    title: Schema.Attribute.String;
    viewMore: Schema.Attribute.String;
    viewMoreLink: Schema.Attribute.String;
    visibility: Schema.Attribute.Enumeration<['all', 'web', 'app', 'hidden']> &
      Schema.Attribute.DefaultTo<'all'>;
  };
}

export interface WidgetShopByLuxury extends Struct.ComponentSchema {
  collectionName: 'components_widget_shop_by_luxuries';
  info: {
    description: '';
    displayName: 'ShopByLuxury';
    icon: 'align-center';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    display: Schema.Attribute.Enumeration<['web', 'mobile']>;
    items: Schema.Attribute.Component<'widget-items.shop-by-luxury-item', true>;
    promotion_id: Schema.Attribute.String;
    promotion_name: Schema.Attribute.String;
    title: Schema.Attribute.String;
    titleColor: Schema.Attribute.String;
    visibility: Schema.Attribute.Enumeration<['all', 'web', 'app', 'hidden']> &
      Schema.Attribute.DefaultTo<'all'>;
  };
}

export interface WidgetShopLook extends Struct.ComponentSchema {
  collectionName: 'components_widget_shop_looks';
  info: {
    displayName: 'ShopLook';
    icon: 'box-open';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    items: Schema.Attribute.Component<'widget-items.shop-look-item', true>;
    shopButton: Schema.Attribute.String;
    shopButtonPath: Schema.Attribute.String;
    titleForMobile: Schema.Attribute.String;
    titleForWeb: Schema.Attribute.String;
  };
}

export interface WidgetShowCase extends Struct.ComponentSchema {
  collectionName: 'components_widget_show_cases';
  info: {
    description: '';
    displayName: 'ShowCase';
    icon: 'file-image';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    display: Schema.Attribute.Enumeration<['web', 'mobile']>;
    items: Schema.Attribute.Component<'widget-items.show-case-item', true>;
    title: Schema.Attribute.String;
    visibility: Schema.Attribute.Enumeration<['all', 'web', 'app', 'hidden']> &
      Schema.Attribute.DefaultTo<'all'>;
  };
}

export interface WidgetSingleBanner extends Struct.ComponentSchema {
  collectionName: 'components_widget_single_banners';
  info: {
    description: '';
    displayName: 'SingleBanner';
    icon: 'archway';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    componentName: Schema.Attribute.String;
    creative_name: Schema.Attribute.String;
    creative_slot: Schema.Attribute.String;
    display: Schema.Attribute.Enumeration<['web', 'mobile']>;
    imageUrl: Schema.Attribute.String;
    imageUrlMobile: Schema.Attribute.String;
    isNewTab: Schema.Attribute.Boolean;
    Item_name: Schema.Attribute.String;
    Item_type: Schema.Attribute.Enumeration<
      ['product', 'offer', 'promotion', 'banner', 'category', 'brand']
    >;
    path: Schema.Attribute.String;
    promotion_id: Schema.Attribute.String;
    promotion_name: Schema.Attribute.String;
    title: Schema.Attribute.String;
    visibility: Schema.Attribute.Enumeration<['all', 'web', 'app', 'hidden']> &
      Schema.Attribute.DefaultTo<'all'>;
  };
}

export interface WidgetSplitBanner extends Struct.ComponentSchema {
  collectionName: 'components_widget_split_banners';
  info: {
    description: '';
    displayName: 'SplitBanner';
    icon: 'image';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    display: Schema.Attribute.Enumeration<['web', 'mobile']>;
    imageUrl: Schema.Attribute.String;
    imageUrlMobile: Schema.Attribute.String;
    isNewTab: Schema.Attribute.Boolean;
    pathLeft: Schema.Attribute.String;
    pathRight: Schema.Attribute.String;
    visibility: Schema.Attribute.Enumeration<['all', 'web', 'app', 'hidden']> &
      Schema.Attribute.DefaultTo<'all'>;
  };
}

export interface WidgetStepperBanner extends Struct.ComponentSchema {
  collectionName: 'components_widget_stepper_banners';
  info: {
    displayName: 'StepperBanner';
    icon: 'box';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    buttonPath: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    isComponentDiffer: Schema.Attribute.Boolean;
    items: Schema.Attribute.Component<'widget-items.stepper-b-item', true>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface WidgetStepperData extends Struct.ComponentSchema {
  collectionName: 'components_widget_stepper_data';
  info: {
    description: '';
    displayName: 'StepperData';
    icon: 'capsules';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    buttonPath: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    categories: Schema.Attribute.Component<
      'widget-items.stepper-category',
      true
    >;
    categoryId: Schema.Attribute.String;
    identifier: Schema.Attribute.Boolean;
  };
}

export interface WidgetTabsComponent extends Struct.ComponentSchema {
  collectionName: 'components_widget_tabs_components';
  info: {
    description: '';
    displayName: 'TabsComponent';
    icon: 'boxes';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    ComponentName: Schema.Attribute.String;
    display: Schema.Attribute.Enumeration<['web', 'mobile']>;
    isComponentDiffer: Schema.Attribute.Boolean;
    items: Schema.Attribute.Component<'widget-items.tabs-component-item', true>;
    title: Schema.Attribute.String;
    visibility: Schema.Attribute.Enumeration<['all', 'web', 'app', 'hidden']> &
      Schema.Attribute.DefaultTo<'all'>;
  };
}

export interface WidgetTitle extends Struct.ComponentSchema {
  collectionName: 'components_widget_titles';
  info: {
    description: '';
    displayName: 'Title';
    icon: 'volleyball-ball';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    componentName: Schema.Attribute.String;
    logoTitle: Schema.Attribute.String;
    strikeThrough: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
    titleColor: Schema.Attribute.String;
    visibility: Schema.Attribute.Enumeration<['all', 'web', 'app', 'hidden']> &
      Schema.Attribute.DefaultTo<'all'>;
  };
}

export interface WidgetTitleTab extends Struct.ComponentSchema {
  collectionName: 'components_widget_title_tabs';
  info: {
    description: '';
    displayName: 'TitleTab';
    icon: 'align-justify';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    color: Schema.Attribute.String;
    componentName: Schema.Attribute.String;
    componentType: Schema.Attribute.String;
    fontSize: Schema.Attribute.String;
    fontWeight: Schema.Attribute.String;
    mobileFontSize: Schema.Attribute.String;
    title: Schema.Attribute.String;
    visibility: Schema.Attribute.Enumeration<['all', 'web', 'app', 'hidden']> &
      Schema.Attribute.DefaultTo<'all'>;
  };
}

export interface WidgetTopBrands extends Struct.ComponentSchema {
  collectionName: 'components_widget_top_brands';
  info: {
    description: '';
    displayName: 'TopBrands';
    icon: 'bowling-ball';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    componentName: Schema.Attribute.String;
    display: Schema.Attribute.Enumeration<['web', 'mobile']>;
    items: Schema.Attribute.Component<'widget-items.top-brands-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface WidgetWallet extends Struct.ComponentSchema {
  collectionName: 'components_widget_wallets';
  info: {
    displayName: 'Wallet';
    icon: 'quran';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface WidgetWalletAdvantages extends Struct.ComponentSchema {
  collectionName: 'components_widget_wallet_advantages';
  info: {
    description: '';
    displayName: 'WalletAdvantages';
    icon: 'funnel-dollar';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    giftCardInfo: Schema.Attribute.String;
    items: Schema.Attribute.Component<
      'widget-items.wallet-advantages-item',
      true
    >;
    quote: Schema.Attribute.String;
    title: Schema.Attribute.String;
    walletButton: Schema.Attribute.String;
    walletButtonPath: Schema.Attribute.String;
  };
}

export interface WidgetWhyConsultant extends Struct.ComponentSchema {
  collectionName: 'components_widget_why_consultants';
  info: {
    description: '';
    displayName: 'WhyConsultant';
    icon: 'battery-three-quarters';
  };
  attributes: {
    bgColor: Schema.Attribute.String;
    bgPadding: Schema.Attribute.String;
    display: Schema.Attribute.Enumeration<['web', 'mobile']>;
    items: Schema.Attribute.Component<'widget-items.why-consultant-item', true>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blog-widget-items.beauty-shot-items': BlogWidgetItemsBeautyShotItems;
      'blog-widget-items.benefits-item': BlogWidgetItemsBenefitsItem;
      'blog-widget-items.blog-beauty-stop-item': BlogWidgetItemsBlogBeautyStopItem;
      'blog-widget-items.blog-carousel-item': BlogWidgetItemsBlogCarouselItem;
      'blog-widget-items.blog-detail-item': BlogWidgetItemsBlogDetailItem;
      'blog-widget-items.blog-frame': BlogWidgetItemsBlogFrame;
      'blog-widget-items.blog-grid-item': BlogWidgetItemsBlogGridItem;
      'blog-widget-items.blog-hero-banner-item': BlogWidgetItemsBlogHeroBannerItem;
      'blog-widget-items.blog-links-item': BlogWidgetItemsBlogLinksItem;
      'blog-widget-items.blog-list-item': BlogWidgetItemsBlogListItem;
      'blog-widget-items.blog-thumbnail-items': BlogWidgetItemsBlogThumbnailItems;
      'blog-widget-items.blog-videos-item': BlogWidgetItemsBlogVideosItem;
      'blog-widget-items.gallery-item': BlogWidgetItemsGalleryItem;
      'blog-widget-items.nav-item': BlogWidgetItemsNavItem;
      'blog-widget-items.nav-sub-item': BlogWidgetItemsNavSubItem;
      'blog-widget.blog-beauty-shots': BlogWidgetBlogBeautyShots;
      'blog-widget.blog-beauty-stop': BlogWidgetBlogBeautyStop;
      'blog-widget.blog-benefits': BlogWidgetBlogBenefits;
      'blog-widget.blog-breadcrumb': BlogWidgetBlogBreadcrumb;
      'blog-widget.blog-carousel': BlogWidgetBlogCarousel;
      'blog-widget.blog-detail': BlogWidgetBlogDetail;
      'blog-widget.blog-grid': BlogWidgetBlogGrid;
      'blog-widget.blog-hero-banner': BlogWidgetBlogHeroBanner;
      'blog-widget.blog-links': BlogWidgetBlogLinks;
      'blog-widget.blog-list': BlogWidgetBlogList;
      'blog-widget.blog-navigation': BlogWidgetBlogNavigation;
      'blog-widget.blog-paragraph': BlogWidgetBlogParagraph;
      'blog-widget.blog-profile': BlogWidgetBlogProfile;
      'blog-widget.blog-quote': BlogWidgetBlogQuote;
      'blog-widget.blog-thumbnail': BlogWidgetBlogThumbnail;
      'blog-widget.blog-videos': BlogWidgetBlogVideos;
      'blog-widget.wishlist': BlogWidgetWishlist;
      'seo.meta': SeoMeta;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'widget-items.accordion-item': WidgetItemsAccordionItem;
      'widget-items.advice-items': WidgetItemsAdviceItems;
      'widget-items.app-icon-item': WidgetItemsAppIconItem;
      'widget-items.beauty-stop-item': WidgetItemsBeautyStopItem;
      'widget-items.bottom-nav-item': WidgetItemsBottomNavItem;
      'widget-items.bottom-nav-s-item': WidgetItemsBottomNavSItem;
      'widget-items.brand-description-item': WidgetItemsBrandDescriptionItem;
      'widget-items.brand-items': WidgetItemsBrandItems;
      'widget-items.brand-list-items': WidgetItemsBrandListItems;
      'widget-items.brand-sub-items': WidgetItemsBrandSubItems;
      'widget-items.brands-grid-item': WidgetItemsBrandsGridItem;
      'widget-items.cart-header-item': WidgetItemsCartHeaderItem;
      'widget-items.categories': WidgetItemsCategories;
      'widget-items.category-carousel-item': WidgetItemsCategoryCarouselItem;
      'widget-items.category-videos-item': WidgetItemsCategoryVideosItem;
      'widget-items.configuration-item': WidgetItemsConfigurationItem;
      'widget-items.consult-service-item': WidgetItemsConsultServiceItem;
      'widget-items.contact-details': WidgetItemsContactDetails;
      'widget-items.contact-form': WidgetItemsContactForm;
      'widget-items.contact-sub-list': WidgetItemsContactSubList;
      'widget-items.events-item': WidgetItemsEventsItem;
      'widget-items.expert-advice-item': WidgetItemsExpertAdviceItem;
      'widget-items.fc-nav-item': WidgetItemsFcNavItem;
      'widget-items.fc-tier-description': WidgetItemsFcTierDescription;
      'widget-items.footer-copy-right-item': WidgetItemsFooterCopyRightItem;
      'widget-items.footer-item': WidgetItemsFooterItem;
      'widget-items.footer-payment-item': WidgetItemsFooterPaymentItem;
      'widget-items.footer-sub-item': WidgetItemsFooterSubItem;
      'widget-items.get-the-app-item': WidgetItemsGetTheAppItem;
      'widget-items.gift-card-detail': WidgetItemsGiftCardDetail;
      'widget-items.gift-card-item': WidgetItemsGiftCardItem;
      'widget-items.gift-form-item': WidgetItemsGiftFormItem;
      'widget-items.grid-carousel-item': WidgetItemsGridCarouselItem;
      'widget-items.header-item': WidgetItemsHeaderItem;
      'widget-items.header-top-item': WidgetItemsHeaderTopItem;
      'widget-items.hero-banner-items': WidgetItemsHeroBannerItems;
      'widget-items.icon-content-item': WidgetItemsIconContentItem;
      'widget-items.lipstick-shade-item': WidgetItemsLipstickShadeItem;
      'widget-items.logo-text-item': WidgetItemsLogoTextItem;
      'widget-items.look-position': WidgetItemsLookPosition;
      'widget-items.loyality-tier-detail': WidgetItemsLoyalityTierDetail;
      'widget-items.multi-show-case-item': WidgetItemsMultiShowCaseItem;
      'widget-items.nested-item': WidgetItemsNestedItem;
      'widget-items.nested-sub-item': WidgetItemsNestedSubItem;
      'widget-items.offer-grid-data-item': WidgetItemsOfferGridDataItem;
      'widget-items.offer-grid-text-item': WidgetItemsOfferGridTextItem;
      'widget-items.offers-grid-items': WidgetItemsOffersGridItems;
      'widget-items.populr-brands-item': WidgetItemsPopulrBrandsItem;
      'widget-items.product-carousel-list': WidgetItemsProductCarouselList;
      'widget-items.product-detail-item': WidgetItemsProductDetailItem;
      'widget-items.product-listing-item': WidgetItemsProductListingItem;
      'widget-items.product-pop-text-item': WidgetItemsProductPopTextItem;
      'widget-items.profile-item': WidgetItemsProfileItem;
      'widget-items.profile-sub-item': WidgetItemsProfileSubItem;
      'widget-items.quick-links-items': WidgetItemsQuickLinksItems;
      'widget-items.saved-payment-item': WidgetItemsSavedPaymentItem;
      'widget-items.saved-payment-sub-item': WidgetItemsSavedPaymentSubItem;
      'widget-items.shop-by-collection-item': WidgetItemsShopByCollectionItem;
      'widget-items.shop-by-luxury-item': WidgetItemsShopByLuxuryItem;
      'widget-items.shop-look-item': WidgetItemsShopLookItem;
      'widget-items.show-case-item': WidgetItemsShowCaseItem;
      'widget-items.stepper-b-item': WidgetItemsStepperBItem;
      'widget-items.stepper-category': WidgetItemsStepperCategory;
      'widget-items.stepper-item': WidgetItemsStepperItem;
      'widget-items.stepper-s-item': WidgetItemsStepperSItem;
      'widget-items.tabs-component-item': WidgetItemsTabsComponentItem;
      'widget-items.top-brands-item': WidgetItemsTopBrandsItem;
      'widget-items.wallet-advantages-item': WidgetItemsWalletAdvantagesItem;
      'widget-items.why-consultant-item': WidgetItemsWhyConsultantItem;
      'widget.accordion': WidgetAccordion;
      'widget.app-horizontal-spacer': WidgetAppHorizontalSpacer;
      'widget.app-icons': WidgetAppIcons;
      'widget.beauty-profile': WidgetBeautyProfile;
      'widget.beauty-stop': WidgetBeautyStop;
      'widget.benefits': WidgetBenefits;
      'widget.book-consultant-heading': WidgetBookConsultantHeading;
      'widget.bottom-bar': WidgetBottomBar;
      'widget.bottom-navigation-bar': WidgetBottomNavigationBar;
      'widget.brand-description': WidgetBrandDescription;
      'widget.brand-list': WidgetBrandList;
      'widget.brands-grid': WidgetBrandsGrid;
      'widget.button': WidgetButton;
      'widget.cart-header': WidgetCartHeader;
      'widget.category-carousel': WidgetCategoryCarousel;
      'widget.category-videos': WidgetCategoryVideos;
      'widget.configurations': WidgetConfigurations;
      'widget.consultant-service': WidgetConsultantService;
      'widget.contact-us': WidgetContactUs;
      'widget.empty-component': WidgetEmptyComponent;
      'widget.events': WidgetEvents;
      'widget.expert-advice': WidgetExpertAdvice;
      'widget.fc-data': WidgetFcData;
      'widget.first-citizen': WidgetFirstCitizen;
      'widget.footer': WidgetFooter;
      'widget.footer-bottom': WidgetFooterBottom;
      'widget.footer-copy-rights': WidgetFooterCopyRights;
      'widget.footer-payment': WidgetFooterPayment;
      'widget.footer-subscribe': WidgetFooterSubscribe;
      'widget.get-the-app': WidgetGetTheApp;
      'widget.gift-card-store': WidgetGiftCardStore;
      'widget.grid-carousel': WidgetGridCarousel;
      'widget.header': WidgetHeader;
      'widget.hero-banner': WidgetHeroBanner;
      'widget.horizontal-spacer': WidgetHorizontalSpacer;
      'widget.image-title': WidgetImageTitle;
      'widget.lipstick-shader': WidgetLipstickShader;
      'widget.logo': WidgetLogo;
      'widget.loyalty-tier': WidgetLoyaltyTier;
      'widget.message': WidgetMessage;
      'widget.multi-banner': WidgetMultiBanner;
      'widget.multi-show-case': WidgetMultiShowCase;
      'widget.nested-child': WidgetNestedChild;
      'widget.no-stores': WidgetNoStores;
      'widget.offer-grid-data': WidgetOfferGridData;
      'widget.offer-grid-text': WidgetOfferGridText;
      'widget.offers-grid': WidgetOffersGrid;
      'widget.orders': WidgetOrders;
      'widget.popular-brands': WidgetPopularBrands;
      'widget.product-bar': WidgetProductBar;
      'widget.product-listing': WidgetProductListing;
      'widget.product-recommendation': WidgetProductRecommendation;
      'widget.products-carousel': WidgetProductsCarousel;
      'widget.products-grid': WidgetProductsGrid;
      'widget.profile': WidgetProfile;
      'widget.quick-links': WidgetQuickLinks;
      'widget.rich-text': WidgetRichText;
      'widget.saved-payment-empty': WidgetSavedPaymentEmpty;
      'widget.saved-payments': WidgetSavedPayments;
      'widget.shop-by-collection': WidgetShopByCollection;
      'widget.shop-by-luxury': WidgetShopByLuxury;
      'widget.shop-look': WidgetShopLook;
      'widget.show-case': WidgetShowCase;
      'widget.single-banner': WidgetSingleBanner;
      'widget.split-banner': WidgetSplitBanner;
      'widget.stepper-banner': WidgetStepperBanner;
      'widget.stepper-data': WidgetStepperData;
      'widget.tabs-component': WidgetTabsComponent;
      'widget.title': WidgetTitle;
      'widget.title-tab': WidgetTitleTab;
      'widget.top-brands': WidgetTopBrands;
      'widget.wallet': WidgetWallet;
      'widget.wallet-advantages': WidgetWalletAdvantages;
      'widget.why-consultant': WidgetWhyConsultant;
    }
  }
}
