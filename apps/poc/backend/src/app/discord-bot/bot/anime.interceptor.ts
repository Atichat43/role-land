import { Injectable } from '@nestjs/common';
import { AutocompleteInteraction } from 'discord.js';
import { AutocompleteInterceptor } from 'necord';

@Injectable()
export class AnimeAutocompleteInterceptor extends AutocompleteInterceptor {
  public transformOptions(interaction: AutocompleteInteraction) {
    const focused = interaction.options.getFocused(true);
    let choices: string[];

    if (focused.name === 'anime') {
      choices = ['Hunter x Hunter', 'Naruto', 'One Piece'];
    }

    const result = choices
      .filter((choice) => choice.startsWith(focused.value.toString()))
      .map((choice) => ({ name: choice, value: choice }));

    return interaction.respond(result);
  }
}
