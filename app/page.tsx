'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, MapPin, Clock, Ticket, Beer, Music, Users, Star } from 'lucide-react';

export default function Home() {
  const [activeDay, setActiveDay] = useState('saturday');

  const saturdayArtists = [
    'Trudy Sosbe Rose', 'Logan Bolling', 'Greyson June', 'Nathan Coots',
    'John Isaacs', 'Luke Trimble', 'Logan Purcell', 'Justin Ratcliff',
    'Johnathon Cox', 'Matthew Douglas Simpson', 'Daniel Cain',
    'Lance Rogers', 'Wes Shipp', 'Joe Clark', 'Chris Knight'
  ];

  const sundayArtists = [
    'Hannah Wheeler', 'Westley Metcalfe', 'Arianna & The Bourbon Britches',
    'Gracie Yates', 'Brock Burton & No Handshakes Band',
    'Cody Lee Meece & The Poor Excuses', 'Moonlight Mile',
    'Smilo & The Ghost', 'Buffalo Wabs', 'Paul McDonald'
  ];

  const ticketOptions = [
    {
      type: 'Single-Day Pass',
      price: '$50',
      description: 'Access to one day of music and vendor fair',
      features: ['All-day music access', 'Vendor fair entry', 'Food truck access']
    },
    {
      type: 'Weekend Pass',
      price: '$90',
      description: 'Both days of festival access',
      features: ['2-day music access', 'Vendor fair entry', 'Food truck access', 'Best value'],
      popular: true
    },
    {
      type: 'Group Discount',
      price: '$70',
      description: 'Per person for 10+ weekend passes',
      features: ['Group of 10+', '2-day access', 'Vendor fair entry', 'Group seating']
    },
    {
      type: 'VIP Pass',
      price: '$190',
      description: 'Premium festival experience',
      features: ['Premium viewing area', 'Private food window', 'Exclusive amenities', 'VIP seating'],
      premium: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-b from-orange-100 via-amber-100 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-amber-900 mb-4 font-serif">
              Ballads & Brews
            </h1>
            <p className="text-2xl md:text-3xl text-amber-800 font-light mb-6">
              Music Festival 2025
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg text-amber-700 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>October 4-5, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Cynthiana, Kentucky</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>Gates 11 AM • Music Noon</span>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-amber-300 shadow-2xl bg-gradient-to-br from-amber-100 to-orange-100 overflow-hidden">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <Music className="h-12 w-12 text-amber-700" />
                    <Beer className="h-12 w-12 text-amber-700" />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-amber-900 font-serif">
                      Festival Highlights
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-white/50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-amber-800">25+</div>
                        <div className="text-sm text-amber-700">Artists</div>
                      </div>
                      <div className="bg-white/50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-amber-800">2</div>
                        <div className="text-sm text-amber-700">Days</div>
                      </div>
                      <div className="bg-white/50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-amber-800">4</div>
                        <div className="text-sm text-amber-700">Acre Field</div>
                      </div>
                      <div className="bg-white/50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-amber-800">∞</div>
                        <div className="text-sm text-amber-700">Good Vibes</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 text-left">
                      <div className="flex items-center gap-3 text-amber-800">
                        <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                        <span>Live music from noon to 10:30 PM</span>
                      </div>
                      <div className="flex items-center gap-3 text-amber-800">
                        <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                        <span>Craft beer & bourbon tastings</span>
                      </div>
                      <div className="flex items-center gap-3 text-amber-800">
                        <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                        <span>Local vendor fair & food trucks</span>
                      </div>
                      <div className="flex items-center gap-3 text-amber-800">
                        <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
                        <span>Family-friendly atmosphere</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <img
              src="/assets/c1833c7a-716a-489e-bb90-e8e66cc0971f.png"
              alt="Festival Lineup Board"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>

          <Button 
            size="lg" 
            className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-6 text-xl rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open('https://www.curtaincalltickets.com/events/buy-tickets/y40eeQzk0nFwo9vk5Lot', '_blank')}
          >
            <Ticket className="h-6 w-6 mr-2" />
            Get Your Tickets Now
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-900 mb-6">A Partnership of Music & Craft</h2>
            <p className="text-xl text-amber-700 max-w-4xl mx-auto leading-relaxed">
              The Train Station (Corbin, KY) has partnered with Maiden City Brewing Company to bring you this 
              two-day celebration of live music and craft beer. Experience Appalachian storytelling, folk and 
              Americana tunes on Maiden City's spacious 4-acre field, paired with locally crafted beers, 
              bourbon tastings, and regional cuisine.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <Music className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <CardTitle className="text-amber-900">Live Music</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700 text-center">
                  Two days of continuous performances featuring regional singer-songwriters and touring acts
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <Beer className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <CardTitle className="text-amber-900">Craft Brews</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700 text-center">
                  Local craft beers, distilled bourbons, and specialty drinks from Maiden City Brewing
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <CardTitle className="text-amber-900">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700 text-center">
                  Vendor fair, food trucks, and a welcoming atmosphere for all ages to enjoy
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Train Station Partnership Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-amber-900 mb-6">About The Train Station</h2>
              <p className="text-xl text-amber-700 mb-6 leading-relaxed">
                The Train Station is a beloved live music venue and event center in Corbin, Kentucky. 
                Known for championing original artists, "Kentucky Unplugged" showcases, and community 
                dance nights, it has hosted everything from intimate listening-room sets to full-band throwdowns.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-amber-900">Previous Location</p>
                    <p className="text-amber-700">4672 5th Street Road, Corbin, KY 40701</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Music className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-amber-900">Programming Highlights</p>
                    <p className="text-amber-700">Original music, line dancing, community shows</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-amber-900">Capacity</p>
                    <p className="text-amber-700">Up to ~500 guests</p>
                  </div>
                </div>
              </div>

              <Card className="border-amber-300 bg-gradient-to-br from-amber-100 to-orange-100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-amber-900 mb-3">2025–2026 Venue Update</h3>
                  <p className="text-amber-800 mb-3">
                    The Train Station is <strong>temporarily closed</strong>. We are building the next chapter now.
                  </p>
                  <p className="text-amber-800 mb-4">
                    <strong>Look for us at our new location in 2026.</strong>
                  </p>
                  <p className="text-sm text-amber-700">
                    Follow updates on social media and our website for the new address, opening timeline, and first-run shows.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-amber-200 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-amber-900 mb-4">Festival Partnership</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-6">
                  <div className="flex items-center justify-center gap-4">
                    <div className="text-center">
                      <Music className="h-12 w-12 text-amber-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-amber-900">The Train Station</p>
                      <p className="text-xs text-amber-700">Corbin, KY</p>
                    </div>
                    <div className="text-4xl text-amber-600">+</div>
                    <div className="text-center">
                      <Beer className="h-12 w-12 text-amber-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-amber-900">Maiden City Brewing</p>
                      <p className="text-xs text-amber-700">Cynthiana, KY</p>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl text-amber-600 mb-2">=</div>
                    <p className="text-lg font-bold text-amber-900">Ballads & Brews 2025</p>
                  </div>
                  
                  <p className="text-amber-700 text-sm leading-relaxed">
                    The Train Station helped assemble and promote the Ballads & Brews lineup, 
                    bringing together Kentucky's finest songwriters for this special celebration 
                    at Maiden City Brewing Company.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lineup Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-900 mb-6">Festival Lineup</h2>
            <p className="text-xl text-amber-700">
              Featuring Kentucky's finest songwriters and touring acts
            </p>
          </div>

          <Tabs value={activeDay} onValueChange={setActiveDay} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 bg-amber-100">
              <TabsTrigger 
                value="saturday" 
                className="data-[state=active]:bg-amber-600 data-[state=active]:text-white"
              >
                Saturday, Oct 4
              </TabsTrigger>
              <TabsTrigger 
                value="sunday"
                className="data-[state=active]:bg-amber-600 data-[state=active]:text-white"
              >
                Sunday, Oct 5
              </TabsTrigger>
            </TabsList>

            <TabsContent value="saturday" className="space-y-6">
              <Card className="border-amber-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-amber-900 text-center flex items-center justify-center gap-2">
                    <Star className="h-6 w-6" />
                    Saturday Lineup
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {saturdayArtists.map((artist, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className={`p-3 text-center justify-center ${
                          artist === 'Chris Knight' 
                            ? 'bg-amber-600 text-white border-amber-600 text-lg font-bold' 
                            : 'border-amber-300 text-amber-800 hover:bg-amber-100'
                        }`}
                      >
                        {artist}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <Badge className="bg-amber-600 text-white px-4 py-2 text-lg">
                      Headliner: Chris Knight
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="sunday" className="space-y-6">
              <Card className="border-amber-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-amber-900 text-center flex items-center justify-center gap-2">
                    <Star className="h-6 w-6" />
                    Sunday Lineup
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {sundayArtists.map((artist, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className={`p-3 text-center justify-center ${
                          artist === 'Paul McDonald' || artist === 'Buffalo Wabs'
                            ? 'bg-amber-600 text-white border-amber-600 text-lg font-bold' 
                            : 'border-amber-300 text-amber-800 hover:bg-amber-100'
                        }`}
                      >
                        {artist}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <Badge className="bg-amber-600 text-white px-4 py-2 text-lg">
                      Co-Headliners: Paul McDonald & Buffalo Wabs
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Tickets Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-900 mb-6">Festival Tickets</h2>
            <p className="text-xl text-amber-700">
              Choose your festival experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ticketOptions.map((ticket, index) => (
              <Card 
                key={index} 
                className={`border-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                  ticket.popular 
                    ? 'border-amber-500 bg-gradient-to-b from-amber-50 to-orange-50' 
                    : ticket.premium
                    ? 'border-orange-500 bg-gradient-to-b from-orange-50 to-red-50'
                    : 'border-amber-200 hover:border-amber-300'
                }`}
              >
                <CardHeader className="text-center relative">
                  {ticket.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-600 text-white">
                      Most Popular
                    </Badge>
                  )}
                  {ticket.premium && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white">
                      Premium
                    </Badge>
                  )}
                  <CardTitle className="text-xl text-amber-900">{ticket.type}</CardTitle>
                  <div className="text-3xl font-bold text-amber-700 mt-2">{ticket.price}</div>
                  <p className="text-sm text-amber-600 mt-2">{ticket.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {ticket.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-amber-700">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-amber-700 hover:bg-amber-800 text-white px-12 py-6 text-xl rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('https://www.curtaincalltickets.com/events/buy-tickets/y40eeQzk0nFwo9vk5Lot', '_blank')}
            >
              <Ticket className="h-6 w-6 mr-2" />
              Purchase Tickets
            </Button>
            <p className="text-sm text-amber-600 mt-4">
              Rain or shine event • No refunds for weather
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-orange-50 to-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-900 mb-6">Festival Experience</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <img
              src="/assets/3d28ad39-a352-4d57-ac69-58f9012aea40.png"
              alt="Local brews and food trucks"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
            <img
              src="/assets/3a7559c0-da95-4334-9fed-4d05f3ee0eb6.png"
              alt="Festival atmosphere"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-amber-900 mb-6">Venue Information</h3>
              <Card className="border-amber-200 shadow-lg">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-amber-900">Maiden City Brewing Company</p>
                        <p className="text-amber-700">272 Sea Biscuit Way, Cynthiana, KY</p>
                        <p className="text-sm text-amber-600">Spacious 4-acre field with gentle slopes</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-amber-900">Festival Hours</p>
                        <p className="text-amber-700">Gates: 11:00 AM • Music: 12:00 PM - 10:30 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-amber-900 mb-6">What to Bring</h3>
              <Card className="border-amber-200 shadow-lg">
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center text-amber-700">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 flex-shrink-0"></div>
                      Blankets or low-back chairs (preferred seating)
                    </li>
                    <li className="flex items-center text-amber-700">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 flex-shrink-0"></div>
                      Rain gear (no umbrellas allowed)
                    </li>
                    <li className="flex items-center text-amber-700">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 flex-shrink-0"></div>
                      Comfortable shoes for hilly terrain
                    </li>
                    <li className="flex items-center text-amber-700">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 flex-shrink-0"></div>
                      Cash and cards for vendors
                    </li>
                    <li className="flex items-center text-amber-700">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 flex-shrink-0"></div>
                      Water bottle to stay hydrated
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-100 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Ballads & Brews 2025</h3>
          <p className="text-xl mb-4">Where the finest ballads meet the tastiest brews</p>
          <p className="text-lg mb-6 text-amber-200">A Train Station & Maiden City Brewing Partnership</p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm mb-8">
            <span>October 4-5, 2025</span>
            <span>•</span>
            <span>Maiden City Brewing Company</span>
            <span>•</span>
            <span>Cynthiana, Kentucky</span>
          </div>

          <Button 
            size="lg" 
            className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full shadow-lg transition-all duration-300"
            onClick={() => window.open('https://www.curtaincalltickets.com/events/buy-tickets/y40eeQzk0nFwo9vk5Lot', '_blank')}
          >
            <Ticket className="h-5 w-5 mr-2" />
            Get Tickets Now
          </Button>

          <div className="mt-8 pt-8 border-t border-amber-800 text-center text-amber-300">
            <p>&copy; 2025 The Train Station & Ballads & Brews Music Festival. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}