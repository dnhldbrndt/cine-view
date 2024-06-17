import React, { useState, useEffect } from 'react';
import "../assets/styles.css";
import Header from '../Header/Header';
import wild from "../assets/wild.jpg"
import dontlooknow from "../assets/looknow.jpg"
import panama from "../assets/panama.jpg"
import thirdman from "../assets/third.jpg"
import riverkwai from "../assets/riverkwai.jpg"

const About = () => {
   

return(
  <div>
      <Header/>
		<div className="page-content">
			<div class="banner" name="about-header" style={{gap: "5px"}}>
 
			  <h1>Filmtip</h1>
			 
			Here is a selection of films that we recommend.
						<div className="fill" style={{}}>
						  <img src={thirdman} style={{}}  alt="The Third Man (1949)"/>
						  <img src={panama} style={{}}  alt="The Tailor of Panama (2001)"/>
						  <img src={wild} style={{}}  alt="Wild at Heart (1990)"/>
						  <img src={riverkwai} style={{}}  alt="Bridge on the River Kwai (1957)"/>
						  <img src={dontlooknow} style={{}}  alt="Don't Look Now (1973)"/>
						</div>
			 <hr style={{height:"2px",borderWidth:"0",color:"gray",backgroundColor:"gray"}} />
			 <h4 style={{textAlign:"left"}}></h4>
			 <ul style={{listStyleType: "none"}}>
				<li>
				<h5>The Third Man (1949): </h5>
				The Third Man, directed by Carol Reed and featuring Orson Welles, transcends the boundaries of film noir to become a meditation on post-war morality and the malleability of truth. Set in a shadowy, decaying Vienna, the film follows Holly Martins (Joseph Cotten), a pulp novelist, as he unravels the mystery surrounding his friend Harry Lime’s death. The cinematography by Robert Krasker turns the city into a character itself, a labyrinthine mess of light and shadow. Welles' portrayal of Lime is magnetic, especially in his famous monologue about Swiss cuckoo clocks and the Borgias, which exudes a casual, unsettling malevolence.
                The film’s tonal complexity—combining dark comedy, social critique, and romance—keeps it persistently engaging. Alida Valli’s Anna adds a poignant reminder of the personal costs of political machinations. Anton Karas's zither score, both jaunty and eerie, perfectly underscores the disintegration of ideals and lives. The Third Man acknowledges the chaos of human nature and the futility of neat resolutions, presenting a fractured reflection of a bygone era and the splintered possibilities of every moral choice. Watching it is like looking into a cracked mirror, revealing the complexity of post-war existence and the blurred lines between hero and villain.
				</li>
				<li>
				<h5>The Tailor of Panama (2001):</h5>
				The Tailor of Panama, directed by John Boorman and adapted from John le Carré's novel, is a film that feels like a sly wink and a smirk at the espionage genre. It’s a story about lies within lies, centered on Harry Pendel (Geoffrey Rush), a tailor with a checkered past who fabricates intelligence for British agent Andy Osnard (Pierce Brosnan). The film's Panama is a vibrant, chaotic, and morally ambiguous playground where everyone is playing everyone else. Rush’s Pendel is a delight, his performance a careful balancing act between charm and desperation. Brosnan, shedding his James Bond persona, is all oily charisma and latent menace, a man who revels in the art of deceit.
                Boorman’s direction keeps the film teetering on the edge of farce and tragedy, a tonal tightrope that makes for an intoxicating viewing experience. The screenplay, co-written by Boorman and Andrew Davies, is sharp and cynical, filled with darkly comic observations on power and corruption. The supporting cast, including Jamie Lee Curtis as Harry’s unsuspecting wife, adds depth to the intricate web of deception. The film’s real strength lies in its refusal to offer easy moral judgments; it delights in the murky gray areas where truth is subjective and loyalty is for sale. The Tailor of Panama is a narrative about the seductive allure of lies and the inevitable unraveling that follows, a cinematic tapestry as intricately woven and ultimately threadbare as Pendel’s finest suits.
				</li>				
				<li>
	           <h5> Wild at Heart (1990):</h5>
			   Wild at Heart, directed by David Lynch, is a hallucinogenic fever dream of a road movie that revels in the extremes of love and violence, blending them into a surreal concoction that’s as disturbing as it is captivating. Nicolas Cage and Laura Dern star as Sailor and Lula, two star-crossed lovers on the run from a nightmarish reality populated by grotesque characters and dark forces. Cage’s Sailor is a volatile mix of Elvis Presley swagger and raw vulnerability, while Dern’s Lula embodies a fervent, almost desperate, desire for freedom and love. The film’s visual style is pure Lynchian madness—vivid, lurid, and unapologetically over-the-top, turning every frame into a tableau of bizarre beauty.
               Lynch’s direction is fearless, pushing the boundaries of conventional narrative to create a cinematic experience that’s part fairy tale, part horror show. The screenplay, adapted from Barry Gifford’s novel, is laced with dark humor and grotesque imagery, weaving together elements of Americana and absurdity. Supporting performances from Willem Dafoe, as the terrifying Bobby Peru, and Diane Ladd, as Lula’s unhinged mother, add to the film’s nightmarish quality. The soundtrack, a mix of rockabilly, opera, and industrial noise, underscores the film’s chaotic energy. Wild at Heart is an exploration of the primal forces that drive us, a cinematic journey through the underbelly of the American dream that leaves you exhilarated and unnerved, like waking up from a vivid, disorienting nightmare that lingers long after you’ve opened your eyes.
				</li>				
				<li>
	           <h5> Bridge on the River Kwai (1957):</h5>
			   Bridge on the River Kwai, directed by David Lean, is an epic war film that transcends the genre's usual boundaries, becoming a profound meditation on obsession, honor, and the absurdity of war. Set in a Japanese POW camp in Burma during World War II, the film focuses on the clash between Colonel Nicholson (Alec Guinness), a British officer whose steadfast adherence to military code borders on fanaticism, and Colonel Saito (Sessue Hayakawa), the camp’s commandant. Nicholson’s rigid principles drive him to lead his men in constructing a bridge as a monument to British perseverance, an act that blurs the line between resistance and collaboration. Guinness’s performance is a masterclass in restraint and intensity, his portrayal of Nicholson a study in the tragic nobility and folly of rigid honor.
               Lean’s direction captures the vast, indifferent beauty of the jungle setting, juxtaposing it with the grim realities of war and the feverish determination of the characters. The screenplay, adapted from Pierre Boulle’s novel, is sharp and layered, delving into the psychological complexities of its protagonists. The film's iconic whistling theme, a jaunty counterpoint to the underlying tension, becomes a haunting refrain by the film’s explosive climax. The bridge itself, a symbol of human endeavor and madness, stands at the center of a narrative that questions the true cost of pride and duty. Bridge on the River Kwai is a sweeping, meticulously crafted exploration of the paradoxes of war, a film that lingers in the mind as a powerful reminder of the thin line between heroism and madness.
				</li>				
				<li>
	            <h5>Don't Look Now (1973): </h5>
				Don't Look Now, directed by Nicolas Roeg, is a film that defies simple categorization, existing in a liminal space between psychological horror, supernatural thriller, and grief-stricken drama. Donald Sutherland and Julie Christie play John and Laura Baxter, a couple reeling from the accidental drowning of their daughter. As they retreat to a hauntingly atmospheric Venice, ostensibly for John's work but more so to escape their sorrow, the city’s labyrinthine canals and decaying beauty become an external reflection of their internal disarray. Roeg’s direction is a masterclass in disorientation; his fragmented, non-linear editing weaves past, present, and future into a tapestry of creeping dread.
                The film’s visual style is both hypnotic and unsettling, with Roeg's use of color—particularly red—as a persistent, menacing motif that ties together the narrative’s thematic threads. Sutherland and Christie deliver performances of raw, palpable grief, their chemistry grounding the film’s more surreal elements in an emotional reality. The eerie presence of Venice, almost a character in itself, amplifies the film’s mood of existential uncertainty. The ambiguous, shocking climax is both devastating and cathartic, leaving viewers to grapple with its implications long after the credits roll. Don't Look Now is a cinematic experience that lingers, a haunting exploration of loss, perception, and the inescapable nature of fate, all wrapped in Roeg’s avant-garde sensibility that demands—and rewards—close, contemplative viewing.
				</li>
			</ul>
			</div>

 
 
 
 
		</div>
  </div>
)
}

export default About