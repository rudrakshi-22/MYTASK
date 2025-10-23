import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ScrollArea } from './ui/scroll-area';
import { HelpCircle } from 'lucide-react';

export function AboutSection() {
  return (
    <div className="bg-[#2a2a2a] rounded-lg p-6 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <HelpCircle className="w-5 h-5 text-gray-500" />
      </div>
      
      <Tabs defaultValue="about" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-transparent border-b border-gray-700 rounded-none h-auto p-0">
          <TabsTrigger 
            value="about" 
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-white data-[state=active]:bg-transparent bg-transparent text-gray-400 data-[state=active]:text-white pb-3"
          >
            About Me
          </TabsTrigger>
          <TabsTrigger 
            value="experiences" 
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-white data-[state=active]:bg-transparent bg-transparent text-gray-400 data-[state=active]:text-white pb-3"
          >
            Experiences
          </TabsTrigger>
          <TabsTrigger 
            value="recommended" 
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-white data-[state=active]:bg-transparent bg-transparent text-gray-400 data-[state=active]:text-white pb-3"
          >
            Recommended
          </TabsTrigger>
        </TabsList>
        
        <ScrollArea className="h-[280px] mt-6">
          <TabsContent value="about" className="mt-0 text-gray-300">
            <p className="leading-relaxed">
              Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
            </p>
            <p className="mt-4 leading-relaxed">
              I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters - Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...
            </p>
          </TabsContent>
          
          <TabsContent value="experiences" className="mt-0 text-gray-300">
            <div className="space-y-4">
              <div>
                <h3 className="text-white mb-2">Sales Representative at Salesforce</h3>
                <p className="text-sm text-gray-400">2022 - Present</p>
                <p className="mt-2 leading-relaxed">
                  Leading enterprise sales initiatives, building strong client relationships, and consistently exceeding quarterly targets through innovative solutions.
                </p>
              </div>
              <div>
                <h3 className="text-white mb-2">Account Manager at TechCorp</h3>
                <p className="text-sm text-gray-400">2019 - 2022</p>
                <p className="mt-2 leading-relaxed">
                  Managed key accounts and developed strategic partnerships that drove significant revenue growth.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="recommended" className="mt-0 text-gray-300">
            <div className="space-y-4">
              <p className="leading-relaxed">
                Based on your interests and goals, I recommend exploring our Enterprise Solutions package. It's designed specifically for growing businesses like yours.
              </p>
              <p className="leading-relaxed">
                I'd also suggest scheduling a demo to see how our platform can streamline your workflow and increase team productivity by up to 40%.
              </p>
              <p className="leading-relaxed">
                Feel free to reach out anytime - I'm here to help you succeed!
              </p>
            </div>
          </TabsContent>
        </ScrollArea>
      </Tabs>
    </div>
  );
}
