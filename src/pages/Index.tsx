import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'map', label: 'Карта', icon: 'Map' },
    { id: 'team', label: 'Команда', icon: 'Users' },
    { id: 'shop', label: 'Магазин', icon: 'ShoppingCart' },
    { id: 'donate', label: 'Донат', icon: 'Heart' },
    { id: 'rules', label: 'Правила', icon: 'BookOpen' },
    { id: 'forum', label: 'Форум', icon: 'MessageSquare' }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="space-y-12 animate-fade-in">
            <div 
              className="relative text-center space-y-6 py-32 rounded-lg overflow-hidden"
              style={{
                backgroundImage: 'url(https://cdn.poehali.dev/projects/5934cd48-ae92-4b31-8f29-72396010b968/files/33fb713b-9135-42b7-93f8-9bf0fe787dd9.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-background/70 backdrop-blur-sm"></div>
              <div className="relative z-10 space-y-6">
                <h1 className="text-4xl md:text-6xl font-pixel text-primary drop-shadow-lg animate-pixel-pulse">
                  KOLIXWORLD
                </h1>
                <p className="text-xl md:text-2xl text-foreground/90 max-w-2xl mx-auto px-4">
                  🎮 Добро пожаловать на лучший сервер Minecraft! Исследуй, строй, сражайся!
                </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button 
                  size="lg" 
                  className="shadow-pixel hover:shadow-pixel-lg transition-all hover:-translate-y-1 font-pixel text-xs"
                  onClick={() => setActiveSection('donate')}
                >
                  <Icon name="Zap" className="mr-2" size={16} />
                  ИГРАТЬ
                </Button>
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="shadow-pixel hover:shadow-pixel-lg transition-all hover:-translate-y-1 font-pixel text-xs"
                  onClick={() => setActiveSection('rules')}
                >
                  <Icon name="BookOpen" className="mr-2" size={16} />
                  ПРАВИЛА
                </Button>
              </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-card border-4 border-primary/30 shadow-pixel hover:shadow-pixel-lg transition-all hover:-translate-y-2">
                <div className="text-center space-y-4">
                  <div className="text-5xl">⛏️</div>
                  <h3 className="font-pixel text-sm text-primary">Выживание</h3>
                  <p className="text-foreground/80">Выживай с друзьями в огромном открытом мире</p>
                </div>
              </Card>

              <Card className="p-6 bg-card border-4 border-accent/30 shadow-pixel hover:shadow-pixel-lg transition-all hover:-translate-y-2">
                <div className="text-center space-y-4">
                  <div className="text-5xl">⚔️</div>
                  <h3 className="font-pixel text-sm text-accent">PvP Арена</h3>
                  <p className="text-foreground/80">Сражайся в эпических битвах на арене</p>
                </div>
              </Card>

              <Card className="p-6 bg-card border-4 border-minecraft-gold/30 shadow-pixel hover:shadow-pixel-lg transition-all hover:-translate-y-2">
                <div className="text-center space-y-4">
                  <div className="text-5xl">🏗️</div>
                  <h3 className="font-pixel text-sm text-minecraft-gold">Креатив</h3>
                  <p className="text-foreground/80">Строй всё, что захочешь, без ограничений</p>
                </div>
              </Card>
            </div>

            <Card className="p-8 bg-secondary/50 border-4 border-secondary shadow-pixel-lg">
              <div className="text-center space-y-4">
                <h2 className="font-pixel text-2xl text-secondary-foreground">Онлайн: 127/200</h2>
                <div className="flex items-center justify-center gap-3 text-lg">
                  <Icon name="Server" className="text-primary" size={24} />
                  <code className="bg-background px-4 py-2 rounded border-2 border-primary/30 font-mono">
                    play.kolixworld.ru
                  </code>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-2 hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon name="Copy" size={16} />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        );

      case 'map':
        return (
          <div className="space-y-6 animate-fade-in">
            <h2 className="font-pixel text-3xl text-primary">🗺️ КАРТА МИРА</h2>
            <Card className="p-8 bg-card border-4 border-primary/30 shadow-pixel">
              <div className="aspect-video bg-muted rounded flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Icon name="Map" className="mx-auto text-primary" size={64} />
                  <p className="text-xl text-muted-foreground">Интерактивная карта загружается...</p>
                  <p className="text-sm text-muted-foreground">Здесь будет отображаться весь мир KolixWorld</p>
                </div>
              </div>
            </Card>
          </div>
        );

      case 'team':
        return (
          <div className="space-y-6 animate-fade-in">
            <h2 className="font-pixel text-3xl text-primary">👥 КОМАНДА</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {['AdminKolix', 'ModerDima', 'BuilderAnna', 'HelperMax'].map((name, idx) => (
                <Card key={name} className="p-6 bg-card border-4 border-primary/30 shadow-pixel hover:shadow-pixel-lg transition-all hover:-translate-y-2">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary/20 rounded border-2 border-primary flex items-center justify-center text-3xl">
                      {['👑', '🛡️', '🔨', '⭐'][idx]}
                    </div>
                    <div>
                      <h3 className="font-pixel text-sm text-primary">{name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {['Владелец', 'Модератор', 'Строитель', 'Помощник'][idx]}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'shop':
        return (
          <div className="space-y-6 animate-fade-in">
            <h2 className="font-pixel text-3xl text-primary">🛒 МАГАЗИН</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'Стартовый набор', price: '0₽', emoji: '📦', color: 'primary' },
                { name: 'Алмазная броня', price: '199₽', emoji: '💎', color: 'minecraft-diamond' },
                { name: 'Элитный дом', price: '499₽', emoji: '🏰', color: 'minecraft-gold' }
              ].map((item) => (
                <Card key={item.name} className="p-6 bg-card border-4 border-primary/30 shadow-pixel hover:shadow-pixel-lg transition-all hover:-translate-y-2">
                  <div className="text-center space-y-4">
                    <div className="text-6xl">{item.emoji}</div>
                    <h3 className="font-pixel text-sm">{item.name}</h3>
                    <p className="text-2xl font-bold text-primary">{item.price}</p>
                    <Button className="w-full shadow-pixel hover:shadow-pixel-lg">
                      <Icon name="ShoppingCart" className="mr-2" size={16} />
                      Купить
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'donate':
        return (
          <div className="space-y-6 animate-fade-in">
            <h2 className="font-pixel text-3xl text-primary">💎 ДОНАТ</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: 'VIP', price: '99₽', color: 'bg-minecraft-grass', perks: ['Цветной ник', '+5 слотов', 'Приват'] },
                { name: 'PREMIUM', price: '299₽', color: 'bg-accent', perks: ['Всё из VIP', 'Кит каждый день', 'Флай'] },
                { name: 'ELITE', price: '599₽', color: 'bg-minecraft-diamond', perks: ['Всё из Premium', 'Частицы', 'Дом x3'] },
                { name: 'LEGEND', price: '999₽', color: 'bg-minecraft-gold', perks: ['Всё из Elite', 'Уникальные префиксы', 'Приоритет'] }
              ].map((rank) => (
                <Card key={rank.name} className={`p-6 border-4 shadow-pixel hover:shadow-pixel-lg transition-all hover:-translate-y-2 ${rank.color}/10 border-${rank.color}`}>
                  <div className="space-y-4">
                    <h3 className="font-pixel text-lg text-center">{rank.name}</h3>
                    <p className="text-3xl font-bold text-center text-primary">{rank.price}</p>
                    <ul className="space-y-2 text-sm">
                      {rank.perks.map((perk) => (
                        <li key={perk} className="flex items-start gap-2">
                          <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                          <span>{perk}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full shadow-pixel hover:shadow-pixel-lg">
                      <Icon name="Heart" className="mr-2" size={16} />
                      Купить
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'rules':
        return (
          <div className="space-y-6 animate-fade-in">
            <h2 className="font-pixel text-3xl text-primary">📜 ПРАВИЛА</h2>
            <Card className="p-8 bg-card border-4 border-primary/30 shadow-pixel">
              <div className="space-y-6">
                {[
                  { title: 'Запрещено', items: ['Читы и моды', 'Оскорбления', 'Спам в чате', 'Гриферство'] },
                  { title: 'Разрешено', items: ['Честная игра', 'Торговля', 'Кооперация', 'Строительство'] }
                ].map((section) => (
                  <div key={section.title} className="space-y-3">
                    <h3 className="font-pixel text-lg text-accent">{section.title}</h3>
                    <ul className="space-y-2 pl-4">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <Icon 
                            name={section.title === 'Запрещено' ? 'X' : 'Check'} 
                            className={section.title === 'Запрещено' ? 'text-destructive' : 'text-primary'}
                            size={20}
                          />
                          <span className="text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="pt-4 border-t-2 border-primary/30">
                  <p className="text-sm text-muted-foreground">
                    За нарушение правил выдаётся бан на 1-30 дней в зависимости от тяжести.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        );

      case 'forum':
        return (
          <div className="space-y-6 animate-fade-in">
            <h2 className="font-pixel text-3xl text-primary">💬 ФОРУМ</h2>
            <div className="space-y-4">
              {[
                { title: 'Как получить VIP ранг?', author: 'PlayerOne', replies: 12, time: '2 часа назад' },
                { title: 'Ищу команду для рейда', author: 'DiamondHunter', replies: 7, time: '5 часов назад' },
                { title: 'Обновление карты мира', author: 'AdminKolix', replies: 34, time: '1 день назад' },
                { title: 'Продаю алмазы', author: 'MerchantSteve', replies: 5, time: '2 дня назад' }
              ].map((post) => (
                <Card key={post.title} className="p-6 bg-card border-4 border-primary/30 shadow-pixel hover:shadow-pixel-lg transition-all hover:-translate-y-1 cursor-pointer">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-2">
                      <h3 className="font-pixel text-sm text-primary">{post.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Icon name="User" size={14} />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="MessageSquare" size={14} />
                          {post.replies} ответов
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Clock" size={14} />
                          {post.time}
                        </span>
                      </div>
                    </div>
                    <Icon name="ChevronRight" className="text-primary" size={24} />
                  </div>
                </Card>
              ))}
              <Button className="w-full shadow-pixel hover:shadow-pixel-lg font-pixel text-xs">
                <Icon name="Plus" className="mr-2" size={16} />
                СОЗДАТЬ ТЕМУ
              </Button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur border-b-4 border-primary/30 shadow-pixel-lg animate-slide-down">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="text-3xl">⛏️</div>
              <span className="font-pixel text-lg md:text-xl text-primary hidden sm:block">KOLIXWORLD</span>
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setActiveSection(item.id)}
                  className={`
                    flex items-center gap-2 whitespace-nowrap
                    ${activeSection === item.id 
                      ? 'shadow-pixel bg-primary text-primary-foreground' 
                      : 'hover:bg-primary/10'
                    }
                  `}
                >
                  <Icon name={item.icon as any} size={16} />
                  <span className="hidden md:inline">{item.label}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {renderContent()}
      </main>

      <footer className="mt-16 border-t-4 border-primary/30 bg-card/50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-4">
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <Icon name="Youtube" size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <Icon name="Send" size={20} />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 KolixWorld. Все права защищены. Это неофициальный проект Minecraft.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;