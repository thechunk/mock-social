//
//  RCTConvert+Mapkit.h
//  MockSocial
//
//  Created by Russell on 17/6/2019.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <MapKit/MapKit.h>
#import <React/RCTConvert+CoreLocation.h>

@interface RCTConvert (Mapkit)

+ (MKCoordinateSpan)MKCoordinateSpan:(id)json;
+ (MKCoordinateRegion)MKCoordinateRegion:(id)json;

@end
