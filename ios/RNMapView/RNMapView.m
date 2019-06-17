//
//  RNMapView.m
//  MockSocial
//
//  Created by Russell on 16/6/2019.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "RNMapView.h"
#import "RCTConvert+Mapkit.h"
#import <MapKit/MapKit.h>

@implementation RNMapView

RCT_EXPORT_MODULE()
RCT_CUSTOM_VIEW_PROPERTY(region, MKCoordinateRegion, MKMapView) {
  [view setRegion:[RCTConvert MKCoordinateRegion:json] animated:YES];
}

- (UIView *)view {
  return [[MKMapView alloc] init];
}

@end
