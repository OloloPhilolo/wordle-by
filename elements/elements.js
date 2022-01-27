'use strict';
this.htmlElements = this.htmlElements || {};
this.htmlElements["instructions"] = `
<div class="overlay-slot">
	<div class="content">
		<header>
			<h1>Як гуляць</h1>
			<game-icon icon="close"></game-icon>
		</header>
		<div class="content-container">
			<section>
				<div class="instructions">
					<p>Адгадайце <strong>ЎОРДЛІ</strong> за 6 спробаў.</p>
					<p>Кожная спроба павінна змяшчаць існуючае слова з пяці літар. <strong>Дж</strong> і <strong>дз</strong> лічацца за дзве літары, апостраф — за адну. Націсніце кнопку «увод», каб пацвердзіць спробу.</p>
					<p>Загадана можа быць любая часціна мовы, але ў пачатковай форме, як у слоўніку: напрыклад, назоўны склон ці інфінітыў.</p>
					<p>Пасля кожнай здагадкі колер пліткі зменіцца, каб паказаць, наколькі ваша здагадка была блізкай да слова.</p>
					
					<div class="examples">
						<p><strong>Прыклады</strong></p>
						<div class="example">
							<div class="row">
								<game-tile letter="ч" evaluation="correct" reveal></game-tile>
								<game-tile letter="а"></game-tile>
								<game-tile letter="б"></game-tile>
								<game-tile letter="о"></game-tile>
								<game-tile letter="р"></game-tile>
							</div>
							<p>Літара <strong>Ч</strong> ёсць у слове і знаходзіцца на правільным месцы.</p>
						</div>
						<div class="example">
							<div class="row">
								<game-tile letter="к"></game-tile>
								<game-tile letter="а" evaluation="present" reveal></game-tile>
								<game-tile letter="в"></game-tile>
								<game-tile letter="у"></game-tile>
								<game-tile letter="н"></game-tile>
							</div>
							<p>Літара <strong>А</strong> ёсць у слове, але знаходзіцца на іншым месцы.</p>
						</div>
						<div class="example">
							<div class="row">
								<game-tile letter="л"></game-tile>
								<game-tile letter="ю"></game-tile>
								<game-tile letter="б"></game-tile>
								<game-tile letter="о"></game-tile>
								<game-tile letter="ў"  evaluation="absent" reveal></game-tile>
							</div>
							<p>Літары <strong>Ў</strong> зусім няма ў слове.</p>
						</div>
					</div>
					
					<p><strong>Новы ЎОРДЛІ з’яўляецца кожны дзень!</strong></p>
				</div>
			</section>
		</div>
	</div>
</div>
`;

this.htmlElements["hello-window"] = `
<div class="overlay">
	<div class="content">
		<section>
			<div class="instructions">
				<p>Адгадайце <strong>ЎОРДЛІ</strong> за 6 спробаў.</p>
				<p>Кожная спроба павінна змяшчаць існуючае слова з пяці літар. <strong>Дж</strong> і <strong>дз</strong> лічацца за дзве літары, апостраф — за адну. Націсніце кнопку «увод», каб пацвердзіць спробу.</p>
				<p>Загадана можа быць любая часціна мовы, але ў пачатковай форме, як у слоўніку: напрыклад, назоўны склон ці інфінітыў.</p>
				<p>Пасля кожнай здагадкі колер пліткі зменіцца, каб паказаць, наколькі ваша здагадка была блізкай да слова.</p>
				
				<div class="examples">
					<p><strong>Прыклады</strong></p>
					<div class="example">
						<div class="row">
							<game-tile letter="ч" evaluation="correct" reveal></game-tile>
							<game-tile letter="а"></game-tile>
							<game-tile letter="б"></game-tile>
							<game-tile letter="о"></game-tile>
							<game-tile letter="р"></game-tile>
						</div>
						<p>Літара <strong>Ч</strong> ёсць у слове і знаходзіцца на правільным месцы.</p>
					</div>
					<div class="example">
						<div class="row">
							<game-tile letter="к"></game-tile>
							<game-tile letter="а" evaluation="present" reveal></game-tile>
							<game-tile letter="в"></game-tile>
							<game-tile letter="у"></game-tile>
							<game-tile letter="н"></game-tile>
						</div>
						<p>Літара <strong>А</strong> ёсць у слове, але знаходзіцца на іншым месцы.</p>
					</div>
					<div class="example">
						<div class="row">
							<game-tile letter="л"></game-tile>
							<game-tile letter="ю"></game-tile>
							<game-tile letter="б"></game-tile>
							<game-tile letter="о"></game-tile>
							<game-tile letter="ў"  evaluation="absent" reveal></game-tile>
						</div>
						<p>Літары <strong>Ў</strong> зусім няма ў слове.</p>
					</div>
				</div>
				
				<p><strong>Новы ЎОРДЛІ з’яўляецца кожны дзень!</strong></p>
			</div>
		</section>
		<div class="close-icon"><game-icon icon="close"></game-icon></div>
	</div>
</div>
`;

this.htmlElements["settings"] = `
<div class="overlay-slot">
	<div class="content">
		<header>
			<h1>Як гуляць</h1>
			<game-icon icon="close"></game-icon>
		</header>
		<section>
			<div class="setting">
				<div class="text">
					<div class="title">Складаны варыянт</div>
					<div class="description">
						Кожная падказка павінна быць выкарыстана ў наступных спробах.
					</div>
				</div>
				<div class="control">
					<game-switch id="hard-mode" name="hard-mode"></game-switch>
				</div>
			</div>
			<div class="setting">
				<div class="text">
					<div class="title">Цёмная тэма</div>
				</div>
				<div class="control">
					<game-switch id="dark-theme" name="dark-theme"></game-switch>
				</div>
			</div>
			<div class="setting">
				<div class="text">
					<div class="title">Кантрасныя колеры</div>
				</div>
				<div class="control">
					<game-switch id="color-blind-theme" name="color-blind-theme"></game-switch>
				</div>
			</div>
		</section>
		<section>
			<div class="setting">
				<div class="text">
					<div class="title">Водгук</div>
				</div>
				<div class="control">
					<a href="https://vk.com/ololo_philolo"  target="blank" title="vk: ololo_philolo">VK</a> | <a href="https://t.me/ololo_philolo_bot" target="blank" title="tg: @ololo_philolo_bot">Telegram</a>
				</div>
			</div>
		</section>
		<section>
			<div class="setting">
				<div class="text">
					<p>Аўтар арыгінальнай гульні: Джош Уордл. Згуляць на ангельскай мове можна <a href = "https://www.powerlanguage.co.uk/wordle/">па спасылцы</a>.<br>Перакладзена на беларускую мову з дапамогай слоўнікаў з <a href="http://www.slounik.org/">Энцыкляпедыі электроннай</a> і <a href="http://www.knihi.com/">Беларускай палічкі</a>.</p>
				</div>
			</div>
		</section>
		<div id="footnote">
			<div>
				<div id="puzzle-number"></div>
			</div>
		</div>
	</div>
</div>	
`;

this.htmlElements["game-theme-manager"] = `
<game-theme-manager>
	<div id="game">
		<header>
			<div class="menu">
				<button id="help-button" class="icon" aria-label="help">
					<game-icon icon="help"></game-icon>
				</button>
			</div>
			<div class="title">ЎОРДЛІ</div>
			<div class="menu">
				<button id="statistics-button" class="icon" aria-label="statistics">
					<game-icon icon="statistics"></game-icon>
				</button>
				<button id="settings-button" class="icon" aria-label="settings">
					<game-icon icon="settings"></game-icon>
				</button>
			</div>
		</header>
		<div id="board-container">
			<div id="board"></div>
		</div>
		<game-keyboard></game-keyboard>
		<game-modal></game-modal>
		<game-page></game-page>
		<div class="toaster" id="game-toaster"></div>
		<div class="toaster" id="system-toaster"></div>
	</div>
</game-theme-manager>
`;

this.htmlElements["debug-tools"] = `
<button id="reveal">reveal</button>
<button id="shake">shake</button>
<button id="bounce">bounce</button>
<button id="toast">toast</button>
<button id="modal">modal</button>
`;

this.htmlElements["keybord"] = `
<div id="keyboard"></div>
`;

this.htmlElements["button"] = `
<button>key</button>
`;

this.htmlElements["row"] = `
<div class="row"></div>
`;

this.htmlElements["tile"] = `
<div class="tile" data-state="empty" data-animation="idle"></div>
`;

this.htmlElements["game-switch"] = `
<div class="container">
	<div class="switch">
		<span class="knob"></span>
	</div>
</div>
`

this.htmlElements["statistics"] = `
<div class="overlay">
    <div class="content">
      <div class="container">
		<h1>Статыстыка</h1>
		<div id="statistics"></div>
		<h1>Гісторыя гульняў</h1>
		<div id="guess-distribution"></div>
		<div class="footer"></div>
	  </div>
      <div class="close-icon">
        <game-icon icon="close"></game-icon>
      </div>
    </div>
  </div>
`;